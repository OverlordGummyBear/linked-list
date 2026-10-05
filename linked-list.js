class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }   

    append(value){
        const newLink = new Node(value);
            
        if(this.head === null && this.tail === null){
            this.tail = newLink;
            this.head = newLink;
        } else{
            const oldHead = this.head;
            this.head = newLink;
            this.head.nextNode = oldHead;
        }
    }

    prepend(value){
        const newLink = new Node(value);

        if(this.head === null && this.tail === null){
            this.tail = newLink;
            this.head = newLink;
        } else{
            const oldTail = this.tail;
            oldTail.nextNode = newLink;
            this.tail = newLink;
        }
    }
}



