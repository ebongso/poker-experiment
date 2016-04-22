"use strict";
  
var hands = function()  {
  var hands = arguments[0];
  console.log(">>> Hands: " + hands); //print out the cards
  
  //Validate argument
  if(arguments.length == 0 || hands === "") {
    console.log("I have no card.");
    return;
  } else if(typeof hands !== "string") {
    console.log("Please supply the cards in string type.");
    return;
  } else if(arguments.length > 1) {
    console.log("This app only considers 1 argument with 5 cards. Taking the first...");
  }
  
  //Validate the number of cards
  var cards = hands.split(" ");
  if(cards.length < NUM_HANDS) {
    console.log("I need more cards");
    return;
  } else if(cards.length > NUM_HANDS) {
    console.log("This app only considers 5 cards for now. Taking the first 5 cards...");
  }
  
  try
  {
    var faces = [];
    var numberedFaces = [];
    var suits = [];
    var rank = [];
    for(var i = 0; i < NUM_HANDS; i++) {
      //Validate each card is unique
      for(var j = i + 1; j < NUM_HANDS; j++) {
        if(cards[i] === cards[j]) {
          console.log("Some cards are the same. Please try again.");
          return;
        }
      }
      
      //Split the face and suit
      var face = cards[i].substring(0, (cards[i]).length - 1);
      
      //Validate the face actually exists
      faces[i] = face;
      if(!FACE_RANKING.hasOwnProperty(faces[i])) { 
        console.log("One of the faces, " + faces[i] + ", is invalid. Thank you for playing.");
        return;
      }
      
      //Turn the faces into numbers so that we can sort them.
      numberedFaces[i] = FACE_RANKING[face]; 
      
      //Validate the suit actually exists
      suits[i] = cards[i].slice(-1);
      if(!SUIT_RANKING.hasOwnProperty(suits[i])) {
        console.log("One of the suits, " + suits[i] + ", is invalid. Thank you for playing.");
        return;
      }
    }
    
    numberedFaces.sort(function(a, b) { return a - b; });
    
    //Determine Ranking
    var ranking = new Ranking();
    ranking.findSequence(NUM_HANDS, numberedFaces, suits, rank);
    if(rank.length == 0) { //Not sequence. Try to find other rankings.
      ranking.findOthers(NUM_HANDS, numberedFaces, suits, rank);
    }
    ranking.findHighCard(NUM_HANDS, numberedFaces, suits, rank, faces);
    
    console.log(rank); //print out the output
  } catch (ex) {
    console.log("One of the cards has problems. Please try again.");
  }
};