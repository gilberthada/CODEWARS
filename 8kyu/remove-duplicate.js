// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// solution

function distinct(a) {
  let noDup = [];
  for (let i = 0; i < a.length; i++) {
    if (!noDup.includes(a[i])) {
      noDup.push(a[i]);
    }
  }
  return noDup;
}
