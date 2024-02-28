function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
//large shirt 
make_shirt();
//medium shirt
make_shirt('Medium');
//custom shirt
make_shirt('Small', 'Code is typescript!');
