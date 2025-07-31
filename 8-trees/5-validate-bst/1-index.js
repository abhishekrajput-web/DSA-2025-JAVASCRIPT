class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



function validateBST(root, min, max){
    if(root === null){
        return true;
    }

    if(root.value<=min || root.value>=max){
        return false;
    }

    return validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max);
}


let root = new Tree(10);
root.left = new Tree(5);
root.right = new Tree(15);
root.left.left = new Tree(2);
root.left.right = new Tree(7);
root.right.left = new Tree(12);
root.right.right = new Tree(20);


console.log(validateBST(root, -Infinity, Infinity));
