




// function groupAnagram(strs){
//     let n = strs.length;
//     if(n===0){
//         return [];
//     }

//     const map = new Map();

//     for(let str of strs){
//         const count = new Array(26).fill(0);
//         for(let char of str){
//             count[char.charCodeAt(0)-97]++;
//         }
//         const key = count.join("");
//         if(!map.has(key)){
//             map.set(key, []);
//         }
//         map.get(key).push(str);
//     }
//     return Array.from(map.values());
// }




// const strs = ["eat","tea","tan","ate","nat","bat"];
// console.log(groupAnagram(strs));
















function groupAnagram(strs){
    let n = strs.length;
    if(n===0){
        return [];
    }

    const map = new Map();

    for(let str of strs){
        let count = new Array(26).fill(0);

        for(let char of str){
            count[char.charCodeAt(0)-97]++;
        }

        const key = count.join("#");
        if(!map.has(key)){
            map.set(key, []);
        }

        map.get(key).push(str);

    }

    return Array.from(map.values());

}




const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(strs));


