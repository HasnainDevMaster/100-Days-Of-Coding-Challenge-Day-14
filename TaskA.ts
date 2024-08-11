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

// Function "make_album" to create an album object
function make_album(
  artist: string, // Name of the artist
  title: string, // Title of the album
  tracks?: number // Optional number of tracks in the album
): {
  artist: string;
  title: string;
  tracks?: number;
} {
  // Create an album object with artist, title, and optionally tracks
  const album = {
    artist,
    title,
    tracks,
  };

  // If the number of tracks is specified, add it to the album object
  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  // Return the album object
  return album;
}

// Example 1: Create an album without specifying the number of tracks
const album1 = make_album("Junaid Jamshed", "Us Raah Par");
console.log(album1); // Output the album object

// Example 2: Create an album with the number of tracks
const album2 = make_album("Ali Zafar", "Huqqa Pani", 10);
console.log(album2); // Output the album object

// Example 3: Create another album without specifying the number of tracks
const album3 = make_album("Atif Aslam", "Doorie");
console.log(album3); // Output the album object
