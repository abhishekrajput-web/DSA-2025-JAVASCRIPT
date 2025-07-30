
class Tree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelorder(root){
    if(root===null){
        return;
    }

    const queue = [root];

    while(queue.length>0){
        let node = queue.shift();
        console.log(node.value);

        if(node.left!==null){
            queue.push(node.left);
        }
        if(node.right!==null){
            queue.push(node.right);
        }

    }
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

console.log("levelorder:");
console.log(levelorder(root));

