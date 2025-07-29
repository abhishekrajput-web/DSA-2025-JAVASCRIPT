



class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}




function findMiddle(head){
if(!head){
    return null;
}

let slow = head;
let fast = head;

while(fast!==null && fast.next!==null){
    slow = slow.next;
    fast = fast.next.next;
}

return slow;

}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);



const middle = findMiddle(head); 
console.log(`${middle.value} is the middle list`);
