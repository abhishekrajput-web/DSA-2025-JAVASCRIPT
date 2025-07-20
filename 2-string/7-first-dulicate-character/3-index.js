function firstDuplicate(s) {
    let n = s.length;
    if (n <= 0) {
      return -1;
    }
  
   const set = new Set();

   for(let char of s){
    if(set.has(char)){
        return char;
    }
    else{
        set.add(char);
    }
   }

   return -1;

  }
  
  const string = "abcdd";
  console.log(firstDuplicate(string));