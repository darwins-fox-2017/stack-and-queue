'use strict'

class Stack {
  constructor () {
    this.data = []
    this.maxSize = 5
  }

  stackPush (x) {
    if (this.isEmpty() === "Yes") {
      return `${this.data.push(x)} record added.\n`
    }
    else if (this.data.length > this.maxSize) {
      return "Stack is Full!\n"
    }
  }

  stackPop () {
    if (this.data.length === 0) {
      return "Data is empty!\n"
    } else {
      return `${this.data.pop()} deleted.\n`
    }
  }

  stackPeek () {
    return this.data[this.data.length-1]
  }

  isEmpty () {
    if (this.data.length < this.maxSize) {
      return "Yes"
    } else {
      return "Stack is Full!\n"
    }
  }
}

let myStack = new Stack()

console.log(`The stack is empty? ${myStack.isEmpty()}\n`)
myStack.stackPush("Javascript")
myStack.stackPush("is just so")
myStack.stackPush("cool")

myStack.stackPush(15)
myStack.stackPeek()

console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

console.log(`The stack is empty? ${myStack.isEmpty()}\n`)
console.log(myStack.stackPop())
