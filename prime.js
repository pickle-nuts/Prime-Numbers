for(var num = 2; num <= 1000; num++){
  var notPrime = false;
  for(var i = 2; i <= num; i++){
    if(num%i===0 && i!==num){
      notPrime = true;
    }
  }
  if(notPrime === false){
    console.log(num);
  }
}