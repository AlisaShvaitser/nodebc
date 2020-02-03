let text = "game of thrones";

const firstChar = text.charAt(0); 
const secondChar = text.charAt(5); 
const thirdChar = text.charAt(8); 

console.log(firstChar); 
console.log(secondChar);
console.log(thirdChar);

console.log(firstChar.toUpperCase().concat ( secondChar.toUpperCase(), thirdChar.toUpperCase() ));


const Char = text.charAt(1000); 
console.log(Char); 