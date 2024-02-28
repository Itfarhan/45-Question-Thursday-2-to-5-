//Program No 1
//Name
var myname = "";
console.log("M.Farhan");
//Date
var dateString = "26/02/2024";
var _a = dateString.split("/").map(Number), day = _a[0], month = _a[1], year = _a[2];
var date = new Date(year, month - 1, day);
console.log(date);
console.log("The program helps to solve math questions.");
//Adition
console.log(5 + 3);
//Subtraction
console.log(10 - 2);
//Multiplication
console.log(2 * 4);
//Division
console.log(16 / 2);
//Program No 2
//Name
var myname = "";
console.log("M.Farhan");
console.log("The program show your fav No");
var favoriteNumber = 6;
var message = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message);
