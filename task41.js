// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
var magicianNames = ["Akmal", "Nathan", "Jacob", "Kumail", "Abu Ubaidah"];
function showMagicians(magicians) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log("The name of magician is ".concat(name_1));
    }
}
showMagicians(magicianNames);
