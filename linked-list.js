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

    size(){
        if(this.head === null) return 0;

        let size = 1;
        let current = this.head;

        while(current.nextNode !== null){
            size++;
            current = current.nextNode;
        }

        return size;
    }
}

export default LinkedList;



