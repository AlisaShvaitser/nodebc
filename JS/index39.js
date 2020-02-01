let firstName = "Alisa";
let lastName = "Shvaitser";
const firstNameCharacterCount = firstName.length;
const lastNameCharacterCount = lastName.length;

console.log ("My first name is "+ firstName + "and it is " + firstNameCharacterCount +" characters long")
console.log ("My last name is "+ lastName + "and it is " + lastNameCharacterCount +" characters long")
console.log ("The character difference between my first name and last name is " + (lastNameCharacterCount - firstNameCharacterCount) )
console.log ("My first name is longer than my last name: " )
if (firstNameCharacterCount > lastNameCharacterCount) {console.log ("True")}
else
{console.log ("False")}