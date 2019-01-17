/*
data structure stores data of any type, its also ordered. 
has a bunch of elements that connects to one another.
it contains a head,tail,and length property

linked lists consist of nodes, and each node has a value and a pointer to another node or null
linked lists
no index 
connectedvia nodse with a next pointer
random access is not allowed

arrays
arrays indexed in order!
insertion and deletion can be expensive
can be quickly be accessed at a specific index
*/

//piece of data - 
//refeerence to next node - next

class Node{
constructor(val){
    this.val = val;
    this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {  //newNode, if the head is null set head and tail to null else tail.next is newnode.next,tail is new node
        //increase length.
        var newNode = new Node(val);
        if(!this.head){  //checks if there is no value in head
            this.head = newNode;  // sets head to the new node
            this.tail = this.head; // sets tail to head if there is no other nodes
        } else {
            this.tail.next = newNode; //sets tail to next items tail
            this.tail = newNode; //tails value is the new node
        }
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(this.length ===0) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(){
        var nodeNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
       let foundnode = this.get(index);
       if(foundNode){
           foundnode.val = val;
           return true;
       }
       return false;
    }

    insert(index, value){
       if (index < 0 || index > this.length) return false;
       if(index === this.length) return this.push(val);
       if(index === 0) return this.unshift(val);

       let newNode = new Node(val);
       let prev = this.get(index - 1);
       let temp = prev.next;
       prev.next = newNode;
       newNode.next = temp;
       this.length++;
       return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let previousNode = this.get(index -1);
        let removed= previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
// bigo
/*
insertion - o(1)
removal - it depends ... o(1) or o(n)
searching o(n)
access o(n)
*/