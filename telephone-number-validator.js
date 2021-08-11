function telephoneCheck(str) {
  //variables
  var countL = 0;
  var countR = 0;
  //look for a country code
  if(!str.match(/^1{1}\W/)){
    //Look for an area code in parentheses
    if(!str.match(/^([(]{1}[0-9]{3}[)]{1})/)){
      //Look for a naked area code
      if(!str.match(/^[0-9]{3}/)){
       return false;
      }
    }
  }
  //Check phone number length
  if(str.replace(/[\(\)\s]|-|[^0-9]/g, "").length < 10){
    return false;
  }
  //check length of non country coded numbers
  if (str[0] != 1){
    if(str.replace(/[\(\)\s]|-|[^0-9]/g, "").length != 10){
      return false;
    }
  }
  //check the amount of hyphens
  for(let x=0, count = 0; x<str.length; x++){
    if (str[x] == "-"){count++;}
    if(count > 2){return false;}
  }
  //check parentheses
  for(let x=0; x<str.length; x++){
    if(str[x] === "("){countL ++ ;}
    else if(str[x] === ")"){countR ++ ;}
    if(countL >=2){ return false;}
  }
  if(countL != countR){
    return false;
  }

    //Invalidates the 3, but invalidates 3 more


  return true;
}
