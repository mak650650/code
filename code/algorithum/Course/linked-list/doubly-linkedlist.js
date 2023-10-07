  /*
 Create a Doubly Linkedlist and perform insertion and deletion operation on them
 */
class CreateNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CreateLinkedList {
    constructor(array){
        const Linkedlist = {};
        for (let i = 0; i < array.length; i++) {
            const node = new CreateNode(array[i]);  
            Linkedlist[array[i]] = node;

            if(i>0){
                Linkedlist[array[i-1]].next = Linkedlist[array[i]];
            }
            if(i > 0){
                Linkedlist[array[i]].prev = Linkedlist[array[i-1]];
            }
        }
        return Linkedlist;
    };
};


let array = [2,4,5,10,12];
const node = new CreateLinkedList(array); 

// // Insertion in LinkedList
const insertion = (val)=>{
    const newNode = new CreateNode(val); // creating new
    node[val] = newNode;
    newNode.next = node[5];
    newNode.prev = node[5].prev;
    node[4].next = newNode;
    node[5].prev = newNode;

}
let val = 13; 
insertion(val);

// Deleation in LinkedList 
const deletion = (val)=>{
    if(node[val].next !== null & node[val].prev !== null){
        const tempNext = node[val].next;
        const tempPrev = node[val].prev;
        node[val].prev.next  = tempNext;
        node[val].next.prev = tempPrev;
        node[val].next = null;
        node[val].prev = null;
    }
}
val = 13;
// deletion(val);   
console.log(node);





