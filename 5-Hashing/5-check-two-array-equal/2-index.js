



function checkEqualArray(arr1, arr2){
    if(arr1.length!==arr2.length){
        return false;
    }

    const map = {};
    
    for(let i = 0; i < arr1.length; i++){
        let num = arr1[i];
        map[num] = (map[num] || 0) + 1;
    }

    for(let num of arr2){
        if(!map[num]){
            return false;
        }

        map[num] = map[num] - 1;
    }
    
    return true;
    }
    
    
    const arr1 = [3, 2, 1];
    const arr2 = [1, 2, 3];
    console.log(checkEqualArray(arr1, arr2));