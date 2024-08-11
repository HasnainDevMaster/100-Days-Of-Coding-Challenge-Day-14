// 100 Days Of Coding Challenge!

/** Question 42:
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified*/

//--------------------------------------------------------------------------------------------------------------------------------

// Define an array of magician names
let magicians_: string[] = [
  // variable name changed from "magicians" to "magicians_" to avoid conflict with the previous built-in "magicians" module
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
];

// Function to add "the Great" to each magician's name
function make_great(magicians_: string[]) {
  for (let i = 0; i < magicians_.length; i++) {
    magicians_[i] = magicians_[i] + " the Great";
  }
}

// Call the function "make_great" to modify the array magicians
make_great(magicians_);

// Function "show_magicians_" to print each magician's name
function show_magicians_(magicians_: string[]) {
  // function name changed from "show_magicians" to "show_magicians_" to avoid conflict with the previous built-in "show_magicians" module
  for (const magician of magicians_) {
    console.log(magician);
  }
}

// Call the function "show_magicians_" to print the modified array
show_magicians_(magicians_);
