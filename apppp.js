
function palindrome(str) {
  // Good luck!
  var check=true;
  var strng=str.replace(/[^A-Za-z]/g,"");
  var lowerString=strng.toLowerCase();
  var lengthStr=lowerString.length;
  console.log("my "+lowerString);
  if(lengthStr%2===0){
    for(i=0;i<lengthStr/2;i++){
      var endIndex=lengthStr-1-i;
      console.log("my "+lowerString[i]+" "+lowerString[endIndex]+" "+endIndex);
      if(lowerString[i]!==lowerString[endIndex]){
        console.log("oops");
        check=false;
      }
    }
  }else{
    for(i=0;i<(lengthStr-1)/2;i++){
      var endIndex2=lengthStr-1-i;
      console.log("my "+lowerString[i]+" "+lowerString[endIndex2]+" "+endIndex2);
      if(lowerString[i]!==lowerString[endIndex2]){
        console.log("oops");
        check=false;
      }
    }


  }
  console.log("result:"+check);
  return check;
}



palindrome("five|\_/|four");
