function getUserID() {
    return 50;
    }

function isUserValid() {
  
        if (getUserID()>30){
           true;}
        else {
            false;
        }
        
      return getUserID();
        }
        if (isUserValid()){
          console.log('User valid');
              }
      else {
          console.log('User not valid');
      }