class Node{
    constructor(value){
        this.value  = value;
        this.next = null; 
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
const linkedlist = new LinkedList();

function pushToQueue(item){
    const node = new Node(item);
    if(linkedlist.head === null) {
        linkedlist.head = node; 
        linkedlist.tail = node;
        linkedlist[node.value] = node;
    }
    else{
        linkedlist.tail.next = node;
        linkedlist[node.value] = node;  
        linkedlist.tail = node;
    }
}

function popFromQueue(){
    let temp = linkedlist.head.next;
    linkedlist.head.next = null;
    linkedlist.head = temp;
}

const array = [2,1,4,3,7];
for (let i = 0; i < array.length; i++) {
    pushToQueue(array[i]);
}


console.log(linkedlist);

popFromQueue();

console.log(linkedlist);
popFromQueue();

console.log(linkedlist);
