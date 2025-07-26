class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


function reverseLinkedList(head){
let prev = null;
let curr = head;
let next = null;

while(curr!==null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}

return prev;
}




let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

let reverseList = reverseLinkedList(head);
let output = "";

while(reverseList){
    output = output + reverseList.value;
    if(reverseList.next){
        output = output + " -> ";        
    }
    reverseList = reverseList.next;
}
console.log(output);   







