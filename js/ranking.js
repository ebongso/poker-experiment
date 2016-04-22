"use strict";

var Ranking = function() {
  //Find High Card
  var findHighCard = function(numHands, numberedFaces, suits, rank, faces) {
    try
    {
      var face = convertNumberToFace(numberedFaces[numHands - 1]);      
      var highCardSuit = "";
      for(var i = 0; i < numHands; i++) {
        if(faces[i] === face) {
          if(highCardSuit !== "") {
            if(SUIT_RANKING[suits[i]] < SUIT_RANKING[highCardSuit]) { 
              highCardSuit = suits[i]; //only reset if the current card is ranked higher
            }
          } else { //set the first card
            highCardSuit = suits[i];
          }
        }
      }
      rank.push(POKER_HANDS.HIGH_CARD + ": " + face + highCardSuit);
    } catch(ex) {
      console.log("Problem with finding High Card.");
    }
    
    function convertNumberToFace(lastFace) {
      var face = "";
      switch(lastFace) {
        case FACE_RANKING["J"]:
          face = "J";
          break;
        case FACE_RANKING["Q"]:
          face = "Q";
          break;
        case FACE_RANKING["K"]:
          face = "K";
          break;
        case FACE_RANKING["A"]:
          face = "A";
          break;
        default:
          face = lastFace.toString();
          break;
      }
      return face;
    };
  };

  //Find Four of a kind, Flush, Three of a kind, 2 pair, or 1 pair
  var findOthers = function(numHands, numberedFaces, suits, rank) {
    var firstSuit = suits[0];
    var sameSuit = true;
    var count = {
      "first": 1,
      "second": 1
    };
    
    try
    {
      var loop = "first";
      var loopCount = numHands - 1; //comparing with the next element, so need to reduce one
      //Loop through to find how many faces are the same
      for(var i = 0; i < loopCount; i++) {
        sameSuit = checkSuit(suits, i, firstSuit, sameSuit);
        if((numberedFaces[i + 1] === numberedFaces[i])) {
          count[loop]++;
        } else {
          if(count[loop] > 0) {
            loop = "second";
          }
        }
      }
      //check the last suit
      sameSuit = checkSuit(suits, loopCount, firstSuit, sameSuit);
      
      if(count["first"] === 4 || count["second"] === 4) {
        rank.push(POKER_HANDS.FOUR_OF_A_KIND);
      } else if(sameSuit) {
        rank.push(POKER_HANDS.FLUSH);
      } else if(count["first"] === 3 || count["second"] === 3) {
        rank.push(POKER_HANDS.THREE_OF_A_KIND);
      } else if(count["first"] === 2 && count["second"] === 2) {
        rank.push(POKER_HANDS.TWO_PAIR);
      } else if(count["first"] === 2 || count["second"] === 2) {
        rank.push(POKER_HANDS.ONE_PAIR);
      }
    } catch(ex) {
      console.log("Problem with finding other rankings.");
    }
  };

  //Find Straight or Straight Flush
  var findSequence = function(numHands, numberedFaces, suits, rank) {
    var firstSuit = suits[0];
    var sameSuit = true;
    var brokenSequence = false;
    var loopCount = numHands - 1; //comparing with the next element, so need to reduce one
    
    try
    {
      for(var i = 0; i < loopCount; i++) {
        sameSuit = checkSuit(suits, i, firstSuit, sameSuit);
        if((numberedFaces[i + 1] - numberedFaces[i]) != 1) {
          brokenSequence = true;
          //If the first card is 2 and the last card that broke the sequence is Ace
          if(numberedFaces[0] === FACE_RANKING["2"] && numberedFaces[i + 1] === FACE_RANKING["A"]) {
            sameSuit = checkSuit(suits, i + 1, firstSuit, sameSuit); //check the last suit
            rank.push(sameSuit ? POKER_HANDS.STRAIGHT_FLUSH : POKER_HANDS.STRAIGHT);
          } 
          break; //no need to continue if the sequence is broken
        }
      }

      if(!brokenSequence) {
        sameSuit = checkSuit(suits, loopCount, firstSuit, sameSuit);
        rank.push(sameSuit ? POKER_HANDS.STRAIGHT_FLUSH : POKER_HANDS.STRAIGHT);
      }
    } catch(ex) {
      console.log("Problem with finding a sequence.");
    }
  };
    
  var checkSuit = function(suits, position, firstSuit, sameSuit) {
    return sameSuit ? (suits[position] === firstSuit) : false;
  }

  return {
    findHighCard: findHighCard,
    findOthers: findOthers,
    findSequence: findSequence
  };
};