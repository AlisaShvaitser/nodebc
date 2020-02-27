let f = 0;
let f1 = -1;
let f2 = 1;

var fibonacci = function(f) {
    while (f < 10) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
    }
}
fibonacci(f);
fibonacci(f);
fibonacci(f);