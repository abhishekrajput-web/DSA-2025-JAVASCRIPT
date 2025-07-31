class Tree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function lca(root, p, q){
    if(root===null){
        return null;
    }

    if(root.value===p || root.value===q){
        return root;
    }

    let leftLca = lca(root.left, p, q);
    let rightLca = lca(root.right, p, q);

    if(leftLca && rightLca){
        return root;
    }

    else if(leftLca!==null){
        return leftLca;
    }

    else {
        return rightLca;
    }

}


let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

let lowest = lca(root,2,5);
console.log(lowest.value);

