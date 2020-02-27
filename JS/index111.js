function even(number){
    if (number%2==0){
      console.log(`${number} is even`);
      return true;
    } else {
      console.log(`${number} is odd`);
      return false;
    }
  }
  
  console.log(even(2));
  console.log(even(5));
  console.log(even(3));
  console.log(even(24));
  console.log(even(12));