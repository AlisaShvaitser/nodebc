let sum = 0;
let number = 1;

if ((number%2) == 0)
number++;
while (number <= 1000) {
 
  console.log('Total odd numbers sum between 0 and 1000: ', sum);
  sum += number;    
  number+=2;         
}