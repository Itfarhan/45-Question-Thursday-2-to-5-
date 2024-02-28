function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    }
    else {
        console.log("You ordered a sandwich with:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log();
}
orderSandwich('ham', 'cheese', 'lettuce');
orderSandwich('turkey', 'bacon');
orderSandwich();
