/*function test () {
    console.log ("Hello");
}
test();

var printS = function ()  {
    console.log ("Text");
};
printS ();

function call (func) {
    func();
};

call (printS); */

var things = require ('./things');
console.log (things.array_counter([1,7,8,99]));
console.log (things.some_value);
console.log (things.multiply (5,8));