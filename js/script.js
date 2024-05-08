// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html


function myButtonClicked() {
  // define numbers
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(document.getElementById("second-number").value)
  let answer = secondNumber
  // multiply
  let numberOfLoops = 0
  while (numberOfLoops <= firstNumber) {
    answer = answer + secondNumber
    numberOfLoops++;
  }
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + answer
}