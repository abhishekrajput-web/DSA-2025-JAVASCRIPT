class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let maxDiameter = 0;

function height(root){
    if(root === null){
        return 0;
    }

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    maxDiameter = Math.max(maxDiameter, leftHeight+rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
}

function diameter(root){
    if(root === null){
        return 0;
    }

    maxDiameter = 0;

    height(root);
    return maxDiameter;

}

let root = new Tree(10);
root.left = new Tree(5);
root.right = new Tree(15);
root.left.left = new Tree(2);
root.left.right = new Tree(7);
root.right.left = new Tree(12);
root.right.right = new Tree(20);

console.log(diameter(root));
