// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// my solution
function problem(x) {
  //your code here
  if (typeof x === "number") {
    return x * 50 + 6;
  } else {
    return "Error";
  }
}

// alternate solution

function problem(x) {
  //your code here
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
