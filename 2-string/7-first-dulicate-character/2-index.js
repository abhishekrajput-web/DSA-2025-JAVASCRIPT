function firstDuplicate(s) {
    let n = s.length;
    if (n <= 0) {
      return -1;
    }
  

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(s[i]===s[j]){
                return s[i];
            }
        }
    }

    return -1;

  }
  
  const string = "abcdd";
  console.log(firstDuplicate(string));
  