function getUsers() {
    return [
    {
        username : "Kamal",
        Userid : 1001
    },
    {
        username : "Jamal",
        Userid : 1002
    }

    ];
}

function findUser(username) {
    let users = getUsers();
    let user = users.find((user)=> user.username === username)
        
return user;
}

console.log(findUser("Kamal"));