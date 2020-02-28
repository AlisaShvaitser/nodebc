const greet = (first,last)=> {
    console.log (`Hi${first}${last}`)
    callback();
    console.log ('Part of logic')
    }
    const callbackFuntion =()=> console.log ('This code')
    greet ('Jhon', 'Rambo',callbackFuntion )
    
    module.exports=greet;