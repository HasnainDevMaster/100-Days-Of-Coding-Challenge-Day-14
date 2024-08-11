"use strict";
// 100 Days Of Coding Challenge!
/** Question 40:
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
//----------------------------------------------------------------------------------------------------------------------------------------
/* Using the Function: make_album that creates dictionaries representing music albums.
It takes an artist name, an album title, and an optional parameter for the number of tracks: */
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example 1: Create an album without specifying the number of tracks
const album1 = make_album("Junaid Jamshed", "Us Raah Par");
console.log(album1);
// Example 2: Create an album with the number of tracks
const album2 = make_album("Ali Zafar", "Huqqa Pani", 10);
console.log(album2);
// Example 3: Create another album without specifying the number of tracks
const album3 = make_album("Atif Aslam", "Doorie");
console.log(album3);
