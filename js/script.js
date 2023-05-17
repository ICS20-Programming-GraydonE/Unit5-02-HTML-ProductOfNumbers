
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function calculates all numbers between min and max. 
  function displayNumbers() { 

  // Declare product
let product = 0 

  // Declare numbers
let numbers = ""

  // Declare two numbers
let numOne = parseInt(document.getElementById('num-one').value )
let numTwo = parseInt(document.getElementById('num-two').value )

  if ((isNaN(numOne)) || (isNaN(numTwo))) {
  numbers= "Please enter two Numbers"
}
    else {
  // Use a for loop to calculate answer of the product of the two intergers 
    for (let counter = 1; counter <= numTwo; counter++) { 
      product+=numOne 
    }
    numbers = numTwo + 'x' + numOne + "=" + product ;
    }
  // DISPLAY PRODUCT
    document.getElementById("display-numbers").innerHTML = numbers
  
  }
    
    

  