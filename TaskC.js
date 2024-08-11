"use strict";
// 100 Days Of Coding Challenge!
/** Question 41:
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified*/
//--------------------------------------------------------------------------------------------------------------------------------
// Define an array of magician names
let magicians_ = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
];
// Function to add "the Great" to each magician's name
function make_great(magicians_) {
    for (let i = 0; i < magicians_.length; i++) {
        magicians_[i] = magicians_[i] + " the Great";
    }
}
// Call the function to modify the array magicians
make_great(magicians_);
// Function to print each magician's name
function show_magicians_(magicians_) {
    for (const magician of magicians_) {
        console.log(magician);
    }
}
// Call the function to print the modified array
show_magicians_(magicians_);
