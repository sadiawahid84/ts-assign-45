// T-Shirt: Write a function called make_shirt() that accepts
//  a size and the text of a message that should be printed on the shirt.
//   The function should print a sentence summarizing t
// he size of the shirt and the message printed on it. Call the function
function makeShirt(size, message) {
    console.log("A '".concat(size, "'sized shirt will be made with the message: '").concat(message, "'."));
}
makeShirt("Medium", "This is my first order");
