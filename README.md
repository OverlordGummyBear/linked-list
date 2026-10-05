# Linked List

A singly linked list implemented in JavaScript, built from scratch using a `Node` class and a `LinkedList` class.

## Methods

* `append(value)`: adds a new node to the end of the list
* `prepend(value)`: adds a new node to the start of the list
* `size()`: returns the total number of nodes
* `head()`: returns the value of the first node, or `undefined` if empty
* `tail()`: returns the value of the last node, or `undefined` if empty
* `at(index)`: returns the value of the node at the given index, or `undefined` if out of range
* `pop()`: removes the head node and returns its value, or `undefined` if the list is empty
* `contains(value)`: returns `true`/`false` depending on whether the value exists in the list
* `findIndex(value)`: returns the index of the first node matching the value, or `-1` if not found
* `toString()`: returns a string representation of the list, e.g. `( value ) -> ( value ) -> null`

## Getting Started

Clone the repo and install dependencies:
```bash
git clone https://github.com/OverlordGummyBear/linked-list.git
cd linked-list
npm install
```