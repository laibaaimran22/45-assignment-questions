let current_users : string [] = ["uswa", "admin", "uzair", "ali", "babar"];
let new_users : string [] = ["iqra", "sana", "ubaid","admin", "ahmed"];

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    
 ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`)
    }
});