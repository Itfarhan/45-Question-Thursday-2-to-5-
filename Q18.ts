
let finalguest: string[] = ["Shoiab", "Ali Imran", "Zaman", "Fahad", "Saad"];

console.log("Sorry, I can only invite two people for dinner.");

while (finalguest.length > 2) {
    const removedGuest = finalguest.pop(); 
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

finalguest.forEach(guest => {
    console.log(`You're still invited, ${guest}!`);
});

finalguest = [];

console.log("Empty list:", finalguest);
