// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array
//  of magicians’ names.
// Because the original
// array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original 
// names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("The Great ".concat(magician));
    }
    return greatMagicians;
}
var magicianNames = ["Akmal", "Nathan", "Jacob", "Kumail", "Abu Ubaidah"];
var magicianNamesCopy = magicianNames.slice();
var greatMagicianNames = make_great(magicianNamesCopy);
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);
