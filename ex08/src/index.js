var username = {
    user1: "user1@gmail.com",
    user2: "user2@gmail.com",
    user3: "user3@gmail.com",
    user4: "user4@gmail.com",
    user5: "user5@gmail.com",
    user6: "user6@gmail.com"
};

function getUsername(myObj){
    return username;
}
console.log(getUsername());
module.exports = getUsername;