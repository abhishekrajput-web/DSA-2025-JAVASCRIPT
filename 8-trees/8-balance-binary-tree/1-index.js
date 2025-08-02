class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function checkBalanced(root){
if(root===null){
    return 0;
}

let left = checkBalanced(root.left);
if(left===-1){
    return -1;
}

let right = checkBalanced(root.right);
if(right===-1){
    return -1;
}

if(Math.abs(left-right) > 1){
return -1;
}

return Math.max(left, right) + 1;
}


function isBalanced(root){
return checkBalanced(root) !== -1;
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.left.left.left = new Tree(8);

if(isBalanced(root)){
    console.log("true");
}
else{
    console.log("false");
}