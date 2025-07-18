




function validParenthesis(str){
    let n = str.length;
    if(n===0){
        return true;
    }

    const stack = [];

    for(let char of str){
        if(char==="("){
            stack.push(")")
        }
        else if(char==="{"){
            stack.push("}")
        }
        else if(char === "["){
            stack.push("]")
        }
        else if(stack.length === 0 || stack.pop()!== char){
            return false;
        }

    }
    
    return stack.length === 0;

}

const string = "()[]{}";
console.log(validParenthesis(string));







