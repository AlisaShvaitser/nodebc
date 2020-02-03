let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

const result = playerName.slice(0, 16);
const result2 = teams.slice(46, 51);
const result3 = message.slice(12, 21);
const result4 = message.slice(34, 39);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
//Patrik Laine is
//jets
//the best
//, Go

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


console.log (result.toUpperCase() + result3 + result2.capitalize() + "player" + result4 + result2.capitalize() + "!!");
//PATRIK LAINE is the best Jets player, Go Jets!!