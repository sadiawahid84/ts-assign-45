
// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt
// and a medium shirt with 
// the default message, and a shirt of any size with a different message




function make_shirt(size="Large", message="I love TypeScript."){
    console.log(`A '${size}'-sized shirt will be made with the message: '${message}'.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small","This shirt is for a kid");