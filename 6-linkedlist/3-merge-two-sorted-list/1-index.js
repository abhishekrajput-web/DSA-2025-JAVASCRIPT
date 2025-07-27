class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(5);

let head2 = new Node(2);
head2.next = new Node(4); 
head2.next.next = new Node(6);


function merge(head1, head2){
    if(head1 === null || head2 ===null){
        if(head1===null){
            return head2;
        }
        else{
            return head1;
        }
    }

    if(head1.value<=head2.value){
        head1.next = merge(head1.next, head2);
        return head1;
    }
    else{
        head2.next = merge(head1, head2.next);
        return head2;
    }
}

const mergedList = merge(head1, head2);

function printList(head){
let result = "";
while(head){
   result =  result + head.value + (head.next ? "->" : "");
    head = head.next;
}
return result;
}

console.log(printList(mergedList));







