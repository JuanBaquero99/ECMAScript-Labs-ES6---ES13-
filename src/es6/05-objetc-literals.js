// enahced object literals

function newUser(user, age, country, uId) {
return {
    user,
    age,
    country,
    id: uId
}
}

console.log(newUser('juan', 22, 'mexico', 1));
