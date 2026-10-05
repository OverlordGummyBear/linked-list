class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}


class LinkedList{
    constructor(){
        this._head = null;
        this._tail = null;
    }   

    append(value){
        const newLink = new Node(value);
            
        if(this._head === null && this._tail === null){
            this._tail = newLink;
            this._head = newLink;
        } else{
            const oldHead = this._head;
            this._head = newLink;
            this._head.nextNode = oldHead;
        }
    }

    prepend(value){
        const newLink = new Node(value);

        if(this._head === null && this._tail === null){
            this._tail = newLink;
            this._head = newLink;
        } else{
            const oldTail = this._tail;
            oldTail.nextNode = newLink;
            this._tail = newLink;
        }
    }

    size(){
        if(this._head === null) return 0;

        let size = 1;
        let current = this._head;

        while(current.nextNode !== null){
            size++;
            current = current.nextNode;
        }

        return size;
    }

    head(){
        if(this._head === null) return undefined;

        return this._head.value;
    }

    tail(){
        if(this._tail === null) return undefined;
        
        return this._tail.value;
    }
}

export default LinkedList;



