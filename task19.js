// Create an array of famous mountains
var guestList = ["Fauzia", "Amnah", "Sadia"];
console.log("I am inviting ".concat(guestList.length, " guests to the dinner tomorrow."));
console.log("Mr ".concat(guestList[1], " will not be able to join at dinner due to his illness"));
guestList[1] = "Aliah";
console.log("INVITATION WITH 1 NEW MEMBER");
console.log("I am inviting ".concat(guestList.length, " guests to the dinner tomorrow."));
console.log("Dear all, I have found a biggerr table for the dinner.");
guestList.unshift("Maria"); //adding a new element at the start of the array
guestList.splice(2, 0, "Tania"); //splice(middleIndex,NoOFElements to delete,NewValue)
guestList.push("Rabia"); //adding new element at the end of the array.
console.log("INVITATION MESSAGE FOR LARGER SET OF GUESTS");
console.log("I am inviting ".concat(guestList.length, " guests to the dinner tomorrow."));
console.log("\nI can only invite two people for the dinner.");
console.log("Mr ".concat(guestList.pop(), ", I am sorry for not being able to invite you for the dinner."));
console.log("Mr ".concat(guestList.pop(), ", I am sorry for not being able to invite you for the dinner."));
console.log("Mr ".concat(guestList.pop(), ", I am sorry for not being able to invite you for the dinner."));
console.log("Mr ".concat(guestList.pop(), ", I am sorry for not being able to invite you for the dinner."));
console.log("\nINVITATION MESSAGE FOR 2 OF THE REMAINING GUESTS");
console.log("I am inviting ".concat(guestList.length, " guests to the dinner tomorrow."));
guestList.pop();
guestList.pop();
console.log("\nTHE LIST AFTER REMOVING ALL:");
console.log("I am inviting ".concat(guestList.length, " guests to the dinner tomorrow."));
