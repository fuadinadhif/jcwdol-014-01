/*
 * 1. Find the unique values from a list of an Array.
 * Input: ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
 * Output: ['Hare', 'Khrisna', ':-O']
 */
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

/*
 * 2. Write a function `aclean(arr)` that returns an array cleaned from anagrams.
 * Example of anagrams:
 *    A. nap - pan
 *    B. ear - are - era
 *    C. cheaters - hectares - teachers
 * Input: ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
 * Output: ["PAN", hectares, era]
 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const map = new Map();

  for (word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

/*
 * 3. This code has a bug. Solve it!
 */
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
