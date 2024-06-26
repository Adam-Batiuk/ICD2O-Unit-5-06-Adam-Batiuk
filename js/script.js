// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-5-07-Adam-Batiuk/sw.js", {
    scope: "/ICD2O-Unit-5-07-Adam-Batiuk/",
  })
}

function myButtonClicked() {
  // define numbers
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(document.getElementById("second-number").value)
  let answer = 0
  // multiply
  let numberOfLoops = 1
  while (numberOfLoops <= firstNumber) {
    answer = answer + secondNumber
    numberOfLoops++
  }
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + answer
}