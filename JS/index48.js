let message = "3.14 it's a great number but 42 it's the answer to life."
let piText = message.substr(0, 4);
console.log (piText);

const pi = parseFloat(piText);

console.log(pi);
let answerToLifeText = message.substr(29, 2);
console.log (answerToLifeText);

const answerToLife = parseInt(answerToLifeText);
console.log (answerToLife);

let result = (pi + answerToLife );
console.log (result);

let message2 = result.toString();
console.log (message2);