/*let n = 10; // Сколько элементов хотим получить
let f = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  f[i] = f[i-1] + f[i-2];
}

console.log(f);
// slice отрезает от массива первые n элементов, если n < 2*/

function fib(n){
  if (n == 0) {
      return 0;
  }
  if (n == 1) {
      return 1;
  }
  return fib(n-1)+fib(n-2);
}
let result = '';
for(i=0;i<20;i++){
  result += fib(i) + "  ";    
}
console.log(result);