// //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.





//let guestList =  ["Fauzia", "Amnah", "Sadia"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
// }
// console.log(`Mr ${guestList[1]} will not be able to join at dinner due to his illness`);
// guestList[1] = "Aliah";
// console.log("INVITATION WITH 1 NEW MEMBER");
// for(let i=0;i<guestList.length;i++){
//     console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
// }
// console.log("Dear all, I have found a biggerr table for the dinner.");
// guestList.unshift("Maria"); //adding a new element at the start of the array
// guestList.splice(2,0,"Tania"); //splice(middleIndex,NoOFElements to delete,NewValue)
// guestList.push("Rabia"); //adding new element at the end of the array.
// console.log("INVITATION MESSAGE FOR LARGER SET OF GUESTS");
// for(let i=0;i<guestList.length;i++){
//     console.log(`Respected ${guestList[i]}, you are cordially invited to a dinner tomorrow at my place`);
// }
// console.log("\nI can only invite two people for the dinner.");
// console.log(`Miss ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
// console.log(`Miss ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
// console.log(`Miss ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
// console.log(`Miss ${guestList.pop()}, I am sorry for not being able to invite you for the dinner.`);
// console.log("\nINVITATION MESSAGE FOR 2 OF THE REMAINING GUESTS");
// for(let i=0;i<guestList.length;i++){
//     console.log(`Respected ${guestList[i]}, you are still invited to the dinner tomorrow at my place`);
// }
// guestList.pop();
// guestList.pop();
// console.log("\nTHE LIST AFTER REMOVING ALL:");
// for(let i=0;i<guestList.length;i++){
//     console.log(guestList[i]);
// }