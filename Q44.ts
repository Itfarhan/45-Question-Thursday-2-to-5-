function orderSandwich(...items: string[]): void {
    console.log("Sandwich order:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log();
}

orderSandwich('ham', 'cheese', 'lettuce');
orderSandwich('turkey', 'bacon');
orderSandwich();
