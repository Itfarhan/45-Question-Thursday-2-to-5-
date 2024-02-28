//Guest List
let dinnerguest: string[] = ["Shoiab", "Zaman", "Ali Imran"];

console.log("Good news! We've found a bigger dinner table!");

dinnerguest.unshift("Fahad");

const middleindex: number = Math.floor(dinnerguest.length / 2);
dinnerguest.splice(middleindex, 0, "Saad");

dinnerguest.push("Rehan");

dinnerguest.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
});
