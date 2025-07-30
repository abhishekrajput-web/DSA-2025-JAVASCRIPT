class Tree{
constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
}

function preorder(root){
if(root===null){
    return;
}
console.log(root.value);
preorder(root.left);
preorder(root.right);
}
function inorder(root){
    if(root === null){
        return;
    }
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
function postorder(root){
    if(root === null){
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

console.log("Preorder:");
preorder(root); // 1 2 4 5 3 6 7

console.log("Inorder:");
inorder(root);  // 4 2 5 1 6 3 7

console.log("Postorder:");
postorder(root); // Output: 4 5 2 6 7 3 1
