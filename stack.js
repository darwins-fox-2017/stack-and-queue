'use strict'

class Stack {
  constructor () {
    this.arr = [];
    this.MAX_SIZE = 5;
  }

  stackPush (x) {
    if(this.arr.length < this.MAX_SIZE)
    this.arr.push(x)
    else {
      console.log("Tumpukan sudah penuh mas.")
    }
  }

  stackPop () {
    if(this.arr.length === 0)
      console.log("Isi stack kosong silahkan isi terlebih dahulu");
    else
    this.arr.pop()
    return this.arr
  }

  stackPeek () {
    return this.arr
  }

  isEmpty () {
    if(this.arr.length === 0)
      return "Stack kosong"
    else
      return "Ada isi dalam stack"
  }
}

let myStack = new Stack();

myStack.stackPush("Javascript")
myStack.stackPush("Is Great")
myStack.stackPush("and Cool")
myStack.stackPush("and Ohh Shitt..")

myStack.stackPush(15)
console.log(myStack.stackPeek())

myStack.stackPush("test full")

console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log("test pop stack kosong")

console.log(myStack.stackPop())

console.log(myStack.isEmpty())
