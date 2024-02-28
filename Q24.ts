let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 5;
let array = [1, 2, 3];
let object = { key: 'value' };

console.log("Test 1: Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);

console.log("Test 2: Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2);

console.log("Test 3: Is 'HELLO' converted to lowercase equal to 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() === 'hello');

console.log("Test 4: Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Test 5: Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Test 6: Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

console.log("Test 7: Is number1 greater than 5 and less than 20? I predict True.");
console.log(number1 > 5 && number1 < 20);

console.log("Test 8: Is number2 less than 0 or greater than 10? I predict False.");
console.log(number2 < 0 || number2 > 10);

console.log("Test 9: Is 2 in the array? I predict True.");
console.log(array.includes(2));

console.log("Test 10: Is 4 not in the array? I predict True.");
console.log(!array.includes(4));
