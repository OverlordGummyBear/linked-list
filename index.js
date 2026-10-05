import LinkedList from "./linked-list.js";

let list = new LinkedList();
list.append("Carrot");
list.append("Bunny")
list.append("Carrot")
//list.prepend("Parrot")

console.log(list.findIndex("Carrot"));
console.log(list)