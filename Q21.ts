// Define types for the items
type item = {
    name: string;
    quantity: number;
};

// objects 
const object1: { [key: string]: item } = {
    item1: { name: "Pencil", quantity: 3 },
    item2: { name: "Pen", quantity: 5 },
    item3: { name: "Scale", quantity: 2 }
};

const object2: { [key: string]: item } = {
    item1: { name: "Door", quantity: 1 },
    item2: { name: "Window", quantity: 1 },
    item3: { name: "Board", quantity: 1 }
};

console.log("Object 1:");
console.log(object1);

console.log("\nObject 2:");
console.log(object2);
