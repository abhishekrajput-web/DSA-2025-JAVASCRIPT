



function checkEqualArray(arr1, arr2){
if(arr1.length!==arr2.length){
    return false;
}


arr1.sort((a,b)=> a-b);
arr2.sort((a,b)=> a-b);


for(let i = 0; i < arr1.length; i++){
    if(arr1[i]!==arr2[i]){
        return false;
    }
}

return true;
}


const arr1 = [3, 2, 1];
const arr2 = [1, 2, 3];
console.log(checkEqualArray(arr1, arr2));