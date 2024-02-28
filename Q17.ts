
let place: string[] = ["USA", "DUBAI", "ENGLAND", "CHINA", "JAPAN"];

console.log("Original order:", place);

console.log("Alphabetical order:", [...place].sort());

console.log("Original order:", place);

console.log("Reverse alphabetical order:", [...place].sort().reverse());

console.log("Original order:", place);

place.reverse();
console.log("Reversed order:", place);

place.reverse();
console.log("Original order:", place);

place.sort();
console.log("Sorted alphabetically:", place);

place.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", place);
