class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameter(root){
    if(root === null){
        return 0;
    }

    let ld = diameter(root.left);
    let rd = diameter(root.right);
    let currentdiameter = height(root.left) + height(root.right) + 1;
    return Math.max(ld, rd, currentdiameter);
}


function height(root){
    if(root == null){
        return 0;
    }

    let left = height(root.left);
    let right = height(root.right);

    return Math.max(left, right) + 1;
}


let root = new Tree(10);
root.left = new Tree(5);
root.right = new Tree(15);
root.left.left = new Tree(2);
root.left.right = new Tree(7);
root.right.left = new Tree(12);
root.right.right = new Tree(20);

console.log(diameter(root));
