'use strict';

var gameStartedTick;
var numberToFind;
var numberOfTries = 0;

function setNumberToFind() {
  numberToFind = Math.floor(Math.random()*998+1);
  console.debug("Shhh, don't tell that %s is the number to find!", numberToFind);
}

var app = angular.module('GuessTheNumber', []);

app.controller("GuessController", function($scope) {
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
        console.error("Guess validity not implemented!");
      }
      $scope.GuessResult = "Sorry, your guess is " + result + ".";
      var guessToRemember = $scope.GuessInput + " - "+ result;
      if ($scope.previousGuesses.indexOf(guessToRemember) == -1) {
        $scope.previousGuesses.unshift(guessToRemember);
      }
      $scope.previousGuesses2.unshift({ 'value': $scope.GuessInput, 'error': result });
      // console.debug($scope.previousGuesses2);
    }
  }
  $scope.previousGuesses = [];
  $scope.previousGuesses2 = [];
});

app.directive("previousGuesses", function() {
  return {
    template: '<ul> <li ng-repeat="p in previousGuesses"> {{ p }}'
  }
});

app.directive("myGuessDisplay", function() {
  return {
    templateUrl: 'guess.html'
  }
});
