"use strict";

//Some inputs
(function() {
  //Examples given in "Poker Questions.txt"
  hands("AC AD 7H 5D 5H");
  hands("AC 4D 7H 5D 6C");  
  
  //Extra inputs:
  // hands(); //undefined arguments
  // hands(""); //no hands
  // hands(1); //invalid hands
  // hands("10C"); //need more cards
  // hands("JD TC 10H 7C 7D");
  // hands("JR TC 10H 7C 7D");
  // hands("JD 5C 10H 7C 7D", "JD QC KH 4C 4D");
  
  //Straight or Straight Flush
  // hands("10C JC QC KC AC");
  // hands("3C 4C 5C 6C AC");
  // hands("2C 3C 4C 6C AC");
  // hands("2C 5C 4H 3C AC");
  // hands("5C 3C 2C 4C AC");
  // hands("2C 3C 4C 5C 6C");

  //Four of a kind
  // hands("JH JD JC JS KC");
  // hands("JH KD JC JS JD");
  // hands("JH 4D 4C 4S 4H");
  // hands("3H 3D JC 3S 3C");

  //Three of a kind or Flush
  // hands("JH 4D JC JS KC");
  // hands("QH 3D QC QS 3C");

  //Two pair
  // hands("JH 4D JC 4S KC");
  // hands("2H 2D JC 10S 10C");

  //One pair
  // hands("JH 10D JC 5S AC");
  // hands("10H 7D 2C 7S QC");

  
  //Misc
  // hands("5H 5C 6S 7S KD");
  // hands("5D 8C 9S JS AC");
  // hands("2D 9C AS AH AC");
  // hands("4D 6S 9H QH QC");
  // hands("2H 2D 4C 4D 4S");
  // hands("2C 3S 8S 8D 10D");
  // hands("2C 5C 7D 8S QH");
  // hands("3D 6D 7D 10D QD");
  // hands("3D 6D 7H QD QS");
  // hands("3C 3D 3S 9S 9D");
  // hands("6C 7C 8C 9C 10C");
  // hands("10D 10C 10H 7C 7D");
  // hands("JD 10C 10H 7C 7D");
})();