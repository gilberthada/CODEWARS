// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// my solution
function nameShuffler(str) {
  //Shuffle It
  let shuffled = "";
  let Array = str.split(" ");
  shuffled = shuffled + Array[1] + " " + Array[0];
  return shuffled;
}

// alternate solution
function nameSuffle(str) {
  return str.split(" ").reverse().join(" ");
}
