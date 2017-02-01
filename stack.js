'use strict'

class Stack {
  constructor () {
    this.stack = []
    this.max = 5
  }

  stackPush (x) {
    if(!this.isFull()){
      this.stack.push(x)
      console.log(`${x} has been added`)
    }else {
      console.log(`stack is full `)
    }
  }

  stackPop () {
    let word = this.stack[this.stack.length - 1]
    this.stack.pop()
    return `${word} has been removed`
  }

  stackPeek () {
    console.log(this.stack[this.stack.length-1])
  }

  isEmpty () {
    if(!this.stack.length){
      return true
    }else{
      return false
    }
  }

  set(x){
    this.max = x
  }

  getMaxSize(){
    console.log(this.max)
  }

  isFull(){
    if(this.stack.length == this.max){
      return true
    }
    return false
  }
}

var myStack = new Stack()

console.log(`The stack is empty? ${myStack.isEmpty()}`)

myStack.stackPush("Javascript")
myStack.stackPush("is just so")
myStack.stackPush("cool")
myStack.stackPush(15)
myStack.stackPush(9)
myStack.stackPush(5)

myStack.stackPeek()

myStack.stackPop()

console.log(myStack.isFull())
console.log(`The stack is empty? ${myStack.isEmpty()}`)
