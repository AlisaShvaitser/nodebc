const showNumbers = function(start, end){
  if(start<end && !isNaN(start) && !isNaN(end)) {
    for (i=start; i<=end; i++){
      console.log(i);
    }
    }
    else if(end < start && !isNaN(start) && !isNaN(end)) {
     for (i=start; i>=end; i--) {
      console.log(i);
    }
  } else if (start == end && !isNaN(start) && !isNaN(end)) {
    console.log("The numbers are the same");
  }
  else {
    console.log("Tis is aren't numbers");
  }

}

showNumbers(20,0);
showNumbers(10, 10);
showNumbers(-10, 20);
showNumbers("star", "moon");