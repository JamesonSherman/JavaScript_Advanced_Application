class Node {
constructor(val){
this.val = val;
this.next = null;
this.prev = null;
    }
}

class DoublyLinkedList {
constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

push(val) {
    var newNode = new Node(val);
    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    }else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
      if(!this.head) return undefined;
      let oldtail = this.tail;
      if(this.length === 1){
          this.head =null;
          this.tail = null;
      }else{
          this.tail = oldtail.prev;
          this.tail.next = null;
          oldtail.prev = null;
      }
      this.length--;
      return oldtail;
  }

  shift(){
      if(this.length === 0)return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
         }
        this.length--;
        return oldHead;
  }
  unshift(val) {
    var newNode= new Node(val);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    }else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
      if(index <0 || index >= this.length) return null;
      let count, current;

      if(index <= this.length /2){
         count =0;
        current = this.head;
        while(count != index){
            current = current.next;
            count++;
        }
        return current;
    } else {
         count = this.length -1;
         current = this.tail;
        while(count !== index) {
            current = current.prev;
            count--;
        }
        return current;
    } 
  }
  set(index, val){
      let foundNode = this.get(index);
      if(foundNode != null){
          foundNode.val = val;
          return true;
      }
      return false;
  }

  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index ===0 ) return this.unshift(val);
      if(index === this.length) return this.push(val);
      
      let newNode = new Node(val);
      let beforenode = this.get(index-1);
      let  afterNode = beforenode.next;
      
      beforenode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afternode, afterNode.prev = newNode;
      
      this.length++;
      return true;
  }

remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1)return this.pop();

    let removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
}

}
/*
insertion o1
removal o1
searching o(n) because we do divide and conquer search its o(n);
acess -o(n)

doubly linked lists are almost identical to singly linked lists
except there is an additional pionter to previous nodes
better than a singly linked lists for finding nodes and can be done in half the time
however they do take up more memory considering the extra pointer

*/