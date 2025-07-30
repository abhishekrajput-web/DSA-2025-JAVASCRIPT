class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



function height(root){
    if(root===null){
        return 0;
    }

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;

}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

console.log(height(root));
