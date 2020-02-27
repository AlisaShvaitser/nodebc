let a = 'a';

function biggerNumber(firstNumber, secondNumber) {
    if(firstNumber > secondNumber)
    {console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);}
    else if (firstNumber < secondNumber)
    {console.log(`Number ${firstNumber} is less than ${secondNumber}`);}
    else if (firstNumber = secondNumber)
    {console.log(`Both numbers are ${firstNumber}`);}
    else (firstNumber || secondNumber  == NaN)
    {console.log(`!!!Error!!! One or both parameters are NOT numbers !!!Error!!!`);}
}
    biggerNumber();
    console.log(biggerNumber(3, 5));
    console.log(biggerNumber(6, 3));
    console.log(biggerNumber(2, 2));
    console.log(biggerNumber('a', 2));