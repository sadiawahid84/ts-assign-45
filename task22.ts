// Create an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Attempt to access an element at an out-of-bounds index
const indexToAccess: number = 10;

// Check if the index is valid before accessing the element
if (indexToAccess >= 0 && indexToAccess < numbers.length) {
  const accessedNumber: number = numbers[indexToAccess];
  console.log("Accessed Number:", accessedNumber);
} else {
  console.error("Index out of bounds!");
}

// Continue with the rest of your program
console.log("The program continues after handling the error.");
