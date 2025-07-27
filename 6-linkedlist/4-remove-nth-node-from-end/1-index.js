
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);



function removeNthNode(head, n){
    if(head === null || head.next === null){
        return null;
    }

    let dummy = new Node(0);
    dummy.next = head;
    

    let slow = dummy;
    let fast = dummy;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }


    while(fast.next!==null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;

    return dummy.next;
}



const remove = removeNthNode(head, 2);

function printList(head){
    let str = "";
    while(head){
        str = str + head.value + (head.next ? "->" : "");
        head = head.next;
    }
    return str;
}

console.log(printList(remove));
