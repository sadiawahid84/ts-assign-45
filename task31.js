//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printe
var userNames = [];
for (var i = 0; i < 1; i++) {
    if (userNames[i] != null) {
        if (userNames[i] == "Admin") {
            console.log("Hello ".concat(userNames[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
        }
    }
    else {
        console.log("We need to find some users!");
    }
}
