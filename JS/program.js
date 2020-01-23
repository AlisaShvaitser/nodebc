const person = {
    name: 'Jane',
    age: 31
  }
  
  const properties = Object.keys(person);
  
  properties.forEach(function(property) {
    console.log("Property: ", person[property]);
  });