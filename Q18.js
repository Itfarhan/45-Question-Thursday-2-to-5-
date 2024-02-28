var guest = ["Shoiab", "Ali Imran", "Zaman", "Fahad", "Saad"];
console.log("Sorry, I can only invite two people for dinner.");
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guest.forEach(function (guest) {
    console.log("You're still invited, ".concat(guest, "!"));
});
guest = [];
console.log("Empty list:", guest);
