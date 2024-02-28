let current_users: string[] = ['ali', 'naveed', 'nouman', 'saad', 'fahad'];
let new_users: string[] = ['arslan', 'sameer', 'Saad', 'farhan', 'Fahad'];

for (let new_user of new_users) {
    let isTaken: boolean = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (isTaken) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
