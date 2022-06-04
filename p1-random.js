/*
    CIT 281 Project 1
    Name: Logan Thompson
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let letterString = "";
for (let x = getRandomInteger(5,26); x>0;x--){
    letterString += letters[getRandomInteger(0,26)];
}
console.log(letterString);