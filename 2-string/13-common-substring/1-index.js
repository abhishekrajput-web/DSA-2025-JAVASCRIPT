
// TWO STRING COMMONN SUBSTRING

function commonSubstring(s1, s2){
    let n1 = s1.length;
    let n2 = s2.length;
    if(n1===0 || n2===0){
        return false;
    }

    const set = new Set();

    for(let char of s1){
        set.add(char);
    }


    for(let char of s2){
        if(set.has(char)){
            return true;
        }
    }

    return false;
}


let str1 = "hello";
let str2 = "world";
console.log(commonSubstring(str1, str2));
