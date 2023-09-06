var guestList = ["Fauziah", "Amnah", "Sadia"];
for (var i = 0; i < 3; i++) {
    console.log("Respected ".concat(guestList[i], ", you are cordially invited to a dinner tomorrow at my place"));
}
console.log("Miss ".concat(guestList[1], " will not be able to join at dinner due to his illness"));
guestList[1] = "Aliah";
for (var i = 0; i < 3; i++) {
    console.log("Respected ".concat(guestList[i], ", you are cordially invited to a dinner tomorrow at my place"));
}
