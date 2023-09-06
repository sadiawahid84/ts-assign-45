var guestList = ["Fauziah", "Amnah", "Sadia"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected ".concat(guestList[i], ", you are cordially invited to a dinner tomorrow at my place"));
}
console.log("Mr ".concat(guestList[1], " will not be able to join at dinner due to his illness"));
guestList[1] = "Aliah";
console.log("INVITATION WITH 1 NEW MEMBER");
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected ".concat(guestList[i], ", you are cordially invited to a dinner tomorrow at my place"));
}
console.log("Dear all, I have found a biggerr table for the dinner.");
guestList.unshift("Maria"); //adding a new element at the start of the array
guestList.splice(2, 0, "Tania"); //splice(middleIndex,NoOFElements to delete,NewValue)
guestList.push("Rabia"); //adding new element at the end of the array.
console.log("INVITATION MESSAGE FOR LARGER SET OF GUESTS");
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected ".concat(guestList[i], ", you are cordially invited to a dinner tomorrow at my place"));
}
