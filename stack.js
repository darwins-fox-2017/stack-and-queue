'use strict'

class Stack {
  constructor () {
    this.arr = []
    this._MAX_SIZE = 4
  }

  stackPush (x) {
    if (this.isFull()) {
      return "Stack Penuh"
    } else {
      return this.arr.push(x)
    }
  }

  stackPop () {
    if (this.isEmpty()) {
      return "Stack Sudah Kosong"
    } else {
      return this.arr.pop()
    }
  }

  stackPeek () {
    return "Tumpukan Paling Atas : " + this.arr[this.arr.length-1]
  }

  isEmpty () {
    if (this.arr.length <= 0) {
      return true
    } else {
      return false
    }
  }

  isFull() {
    if (this.arr.length === this._MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
}

let myStack = new Stack()
console.log(`The stack is empty? ${myStack.isEmpty()}`)

myStack.stackPush("JavaScript")
myStack.stackPush("is just so")
myStack.stackPush("cool")

myStack.stackPush(15)

myStack.stackPeek()

console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

console.log(`The stack is empty? ${myStack.isEmpty()}`)
console.log(myStack.stackPop())
