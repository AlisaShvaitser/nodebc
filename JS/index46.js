let userAndPassword ='pepito2017,12345';
const User = userAndPassword.substr(0, 10);
console.log (User);
const Password = userAndPassword.substr(11);
console.log (Password);
console.log ("The user " + User + " has " + Password + " as password")

/*String.slice(begin, end)
  String.substr(begin, length)*/