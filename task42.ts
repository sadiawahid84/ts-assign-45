// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.






var magicianNames: string[] = ["Akmal", "Nathan", "Jacob", "Kumail", "Abu Ubaidah"];

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const name of magicians) {
        greatMagicians.push(`The Great ${name}`);
    }
    return greatMagicians;
}

function showMagicians2(magicians: string[]) {
    for (const name of magicians) {
        console.log(`The name of magician is ${name}`);
    }
}

const greatMagicianNames: string[] = makeGreat(magicianNames);

showMagicians2(greatMagicianNames);