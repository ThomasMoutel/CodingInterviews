'use strict';

var gameStartedTick;
var numberToFind;
var numberOfTries = 0;

function setNumberToFind() {
  numberToFind = Math.floor(Math.random()*998+1);
  console.debug("Shhh, don't tell that %s is the number to find!", numberToFind);
}

var appGTN = angular.module('GuessTheNumber', []);

appGTN.controller("GuessController", function($scope) {
  $scope.checkInput = function() {
    if (numberOfTries == 0) {
      gameStartedTick = new Date();
    }
    numberOfTries = numberOfTries + 1;
    if ($scope.GuessInput == numberToFind) {
      var gameLength = Math.floor((new Date() - gameStartedTick) / 1000);
      $scope.GuessResult = "Congratulations! You found it after " + numberOfTries + " tries and " + gameLength + " seconds.";
    }
    else {
      var result;
      if ($scope.GuessInput < numberToFind) {
        result = "too low";
      }
      else if ($scope.GuessInput > numberToFind) {
        result = "too high";
      }
      else {
        result = "out of range";
        console.error("Guess validity not implemented!");
      }
      $scope.GuessResult = "Sorry, your guess is " + result + ".";
      var guessToRemember = $scope.GuessInput + " - "+ result;
      $scope.previousGuesses.unshift({ 'value': $scope.GuessInput, 'error': result });
    }
  }
  $scope.previousGuesses = [];
});

appGTN.directive("myGuessDisplay", function() {
  return {
    scope: {
      myGuessDisplay: '='
    },
    replace: false,
    templateUrl: 'html/guess.html'
  }
});
