let n1, n2, n3, res;
    n1 = 2;
    n2 = 3;
    n3 = 5;
res = plusGrand3(n1, n2, n3);
//function plusGrand3(n1, n2, n3) {
  
    
 // return Math. max(n1,n2,n3);
//}
//
  //ou
  function plusGrand3(n1, n2, n3) {
  
    res = 0;
    if (n1 > n2){
      res = n1;
    } 
    else{
      res = n2;
    }
    if (n3 > res){
      res = n3;
    }
    return res;
  }