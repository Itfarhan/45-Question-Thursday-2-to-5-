function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }
    return car;
}
var myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');
console.log(myCar);
