// Store the person's name with whitespace
const personNameWithWhitespace: string = "\t\n   Albert Einstein  \t\n";

// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);

// Strip the whitespace and print the name without it
const strippedName: string = personNameWithWhitespace.trim();

console.log("\nName after Stripping Whitespace:");
console.log(strippedName);
