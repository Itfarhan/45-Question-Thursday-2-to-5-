//Guest List
var guests = ["Shoiab", "Zaman", "Ali Imran"];
console.log("Good news! We've found a bigger dinner table!");
guests.unshift("Fahad");
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Saad");
guests.push("Rehan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner at my place."));
});
