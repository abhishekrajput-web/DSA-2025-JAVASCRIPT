function arrayConvert(str){
let arr = [];
for(let i = 0; i < str.length; i++){
    arr[i] = str[i];
}
return arr;
}

function stringConvert(arr){
    let result = "";
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    return result;
}

function groupAnagram(arr){
    let n = arr.length;
    if(n===0){
        return arr;
    }

    const map = new Map();

    for(let str of arr){
        let array = arrayConvert(str);
        array.sort();
        let sortredString = stringConvert(array);

        if(!map.has(sortredString)){
            map.set(sortredString, []);
        }

        map.get(sortredString).push(str);
    }

    // return Array.from(map.values());

    let result = [];
    for(let [key, value] of map){
        result.push([key,value]);
    }
    return result;

}


const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(strs));

