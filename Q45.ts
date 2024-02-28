interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;

function createCar(manufacturer: string, model: string, ...args: string[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }

    return car;
}

let myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');

console.log(myCar);
