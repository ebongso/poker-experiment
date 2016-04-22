"use strict";

const NUM_HANDS = 5;

const FACE_RANKING = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14
};

//This is ranked according to the "Poker Question.txt" description.
//Clubs is ranked the highest.
const SUIT_RANKING = {
  "C": 1,
  "D": 2,
  "S": 3,
  "H": 4
};

//Only the following 8 hands are considered.
const POKER_HANDS = {
  STRAIGHT_FLUSH: "Straight flush",
  FOUR_OF_A_KIND: "Four of a kind",
  FLUSH: "Flush",
  STRAIGHT: "Straight",
  THREE_OF_A_KIND: "Three of a kind",
  TWO_PAIR: "Two pair",
  ONE_PAIR: "One pair",
  HIGH_CARD: "High card"
};