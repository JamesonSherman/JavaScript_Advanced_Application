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

    traverse(){  //traverses the linked list to display all items
        let current = this.head; //curerent is the head
        while(current){ //while theres a current
            console.log(current.val); //log values
            current = current.next; //moves values
        }
    }

    pop(){  //pops a value off the end of the list
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

    shift(){ //pulls a value off the front of the list
        if(this.length ===0) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){ //pushes a value onto the front of the list
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

    get(index){  //finds a specific node
        if(index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){  //sets a specifc node to a value
       let foundnode = this.get(index);
       if(foundNode){
           foundnode.val = val;
           return true;
       }
       return false;
    }

    insert(index, value){  //inserts a node at the specifc value
       if (index < 0 || index > this.length) return false;
       if(index === this.length) return this.push(val);
       if(index === 0) return this.unshift(val);

       let newNode = new Node(value);
       let prev = this.get(index - 1);
       let temp = prev.next;
       prev.next = newNode;
       newNode.next = temp;
       this.length++;
       return true;
    }

    remove(index){  //removes a node at a specifc place
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let previousNode = this.get(index -1);
        let removed= previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    has(val){
        let current = this.head;
        while(current){
            if(current.val === val) return true;
            current = current.next;
        }
        return false;
        //o(n);
    }

    reverse(){ //reverses the linked list
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

let list = new SinglyLinkedList();
// bigo
/*
insertion - o(1)
removal - it depends ... o(1) or o(n)
searching o(n)
access o(n)
*/