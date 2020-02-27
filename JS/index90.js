for (let sum = 0, number = 1; number <= 1000; sum += number, number+=2)

{
    if ((number%2) == 0)
    number++;
        console.log('Total odd numbers sum between 0 and 1000: ', sum);
}