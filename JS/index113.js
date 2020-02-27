/*Create a new index113.js file
Define the function getShapePerimeter that accepts 2 parameters: base and height
If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle
This function returns a number that represents the shape perimeter
Show the following output: %perimeter% is the shape perimeter
If the perimeter is bigger than 100 then show the following output: The perimeter is too big
Else show the following message: The perimeter is fine
Call this function a couple of times with different values
Test all posible cases*/

function getShapePerimeter (base, height)

const getShapePerimiter = function(base, height) {
    let perimeter = 2*base+ 2*height;
    if (base==height && perimeter <=100) {
      console.log(`${perimeter} is a square`);
    } else if (base != height && perimeter <=100) {
        console.log(`${perimeter} is a retangle`);
      }
      else {
        console.log("The perimeter is too big");
      }
  }
  
  getShapePerimiter(10,10);
  getShapePerimiter(100,10);
  getShapePerimiter(1,10);

  /*var base = 5;
var height = 4;

function getShapePerimeter(base, height){
    if (base == height){
        console.log(4*base +' '+ 'is the shape perimeter.');
    }
    else{
        console.log(2*(base + height) +' '+ 'is the shape perimeter.');
    }
    if (4*base>=100){
        console.log('The perimeter is too big');
    }
    else{
        console.log('The perimeter is fine');
    }
    
}
getShapePerimeter(base, height);*/

