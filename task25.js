var alienColor = "blue";
if (alienColor == 'blue') {
    console.log("Player just earned 5 points");
}
// PASSES THE TEST
alienColor = "green";
if (alienColor == 'green') {
    console.log("The alien has been shot down");
}
// FAILS THE TEST
if (alienColor == 'orange') {
    console.log("No Output");
}
