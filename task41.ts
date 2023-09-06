// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.




var magicianNames: string[] = ["Akmal","Nathan","Jacob","Kumail","Abu Ubaidah"];

function showMagicians(magicians:string[]){
    for(const name of magicianNames){
        console.log(`The name of magician is ${name}`);
    }
}
showMagicians(magicianNames);