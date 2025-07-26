
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


function detectCycle(head){
if(!head || !head.next){
    return null;
}


let slow = head;
let fast = head;

while(fast!==null && fast.next!==null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow===fast){
        slow = head;
        while(slow!==fast){
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

}

return null;

}




const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next.next;


let findCycle = detectCycle(head);

if(findCycle){
    console.log(` cycle detected  ${findCycle.value}`);
}
else{
    console.log("no cycle detected");
    
}

