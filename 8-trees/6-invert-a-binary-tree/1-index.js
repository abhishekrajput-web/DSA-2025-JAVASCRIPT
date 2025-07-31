class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}




function invert(root){
    if(root === null){
        return null;
    }

    let queue = [root];

    while(queue.length>0){
        let node = queue.shift();
        
        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        if(node.left!==null){
            queue.push(node.left);
        }
        if(node.right!==null){
            queue.push(node.right);
        }
    }

    return root;

}


let root = new Tree(10);
root.left = new Tree(5);
root.right = new Tree(15);
root.left.left = new Tree(2);
root.left.right = new Tree(7);
root.right.left = new Tree(12);
root.right.right = new Tree(20);


let invertTree = invert(root);
console.log("Inverted Tree (Level Order):");
let queue = [invertTree];
while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
}