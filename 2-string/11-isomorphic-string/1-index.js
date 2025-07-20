function isomorphicString(s1, s2){
let n1 = s1.length;
let n2 = s2.length;
if(n1!==n2){
    return false;
}


let map1 = new Map();
let map2 = new Map();


for(let i = 0; i < n1; i++){
    let char1 = s1[i];
    let char2 = s2[i];

    if(map1.has(char1) && map1.get(char1)!==char2 || map2.has(char2) && map2.get(char2)!==char1){
        return false;
    }

    map1.set(char1, char2);
    map2.set(char2, char1);
}

return true;
}

    const string1 = "egg";
    const string2 = "add";
    console.log(isomorphicString(string1, string2));
    
    