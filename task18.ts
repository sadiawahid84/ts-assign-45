// // Array of travel destinations (not in alphabetical order)
// const travelDestinations: string[] = [
//     "Paris",
//     "Tokyo",
//     "Bali",
//     "New York",
//     "Rome"
//   ];
  
//   // Print the array in its original order
//   console.log("Original Order:", travelDestinations);
  
//   // Print the array in alphabetical order without modifying the actual list
//   console.log("Alphabetical Order:", [...travelDestinations].sort());
  
//   // Show that the array is still in its original order
//   console.log("Original Order (unchanged):", travelDestinations);
  
//   // Print the array in reverse alphabetical order without changing the order of the original list
//   console.log("Reverse Alphabetical Order:", [...travelDestinations].sort().reverse());
  
//   // Show that the array is still in its original order
//   console.log("Original Order (unchanged):", travelDestinations);
  
//   // Reverse the order of the list
//   travelDestinations.reverse();
//   console.log("Reversed Order:", travelDestinations);
  
//   // Reverse the order of the list again to get back to the original order
//   travelDestinations.reverse();
//   console.log("Original Order (after reversing again):", travelDestinations);
  
//   // Sort the array in alphabetical order and print it
//   console.log("Sorted in Alphabetical Order:", travelDestinations.sort());
  
//   // Sort to change the array in reverse alphabetical order and print it
//   console.log("Sorted in Reverse Alphabetical Order:", travelDestinations.sort().reverse());
  


//sameed:::
// const travelDestintation: string[] = ["Istanbul","Dubai","Paris","London","NewYork"];
// console.log("\nORIGINAL TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }

// const originalTravelDestinaton: string[] = travelDestintation.slice();

// travelDestintation.sort();
// console.log("\nRIGHT ALPHABETICALLY SORTED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }
// console.log("\nORIGINAL STATE TRAVEL DESTINATION LIST:");
// for(let i=0;i<originalTravelDestinaton.length;i++){
//     console.log(originalTravelDestinaton[i]);
// }

// travelDestintation.sort((a,b)=>b.localeCompare(a));
// console.log("\nREVERSE ALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }

// console.log("\nORIGINAL STATE TRAVEL DESTINATION LIST:");
// for(let i=0;i<originalTravelDestinaton.length;i++){
//     console.log(originalTravelDestinaton[i]);
// }

// travelDestintation.sort();
// console.log("\nREVERSED ORDER RETURNED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }

// travelDestintation.sort((a,b)=>b.localeCompare(a));
// console.log("\nAGAIN REVERSE ORDERED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }

// travelDestintation.sort();
// console.log("\nALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }

// travelDestintation.sort((a,b)=>b.localeCompare(a));
// console.log("\nREVERSE ALPHABETICALLY ORDERED TRAVEL DESTINATION LIST:");
// for(let i=0;i<travelDestintation.length;i++){
//     console.log(travelDestintation[i]);
// }