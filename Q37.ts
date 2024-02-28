function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

//large shirt 
make_shirt();

//medium shirt
make_shirt('Medium');

//custom shirt
make_shirt('Small', 'Code is typescript!');
