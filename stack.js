'use strict'

class Stack {
  constructor () {
    this.stackArr = []
    this.MAXSIZE = 5
  }

  stackPush (value) {
    if(this.isfull()){
      console.log("sudah penuh");
    }else {
      this.stackArr.push(value)  
    }
  }

  stackPop () {
    this.stackArr.pop()
    return "one item deleted"
  }

  stackPeek () {
    return this.stackArr.slice(-1).join(" ")
  }

  isEmpty () {
    if(this.stackArr[0] === undefined){
      return true
    } else {
      return false
    }
  }

  isfull(){
    if (this.stackArr.length > this.MAXSIZE){
      return true
    }
    return false
  }

}

let myStack = new Stack()
myStack.stackArr.push("javascript")
myStack.stackArr.push("is just so")
myStack.stackArr.push("Stack 1")
myStack.stackArr.push("Stack 2")
myStack.stackArr.push("Stack 3")



console.log(myStack)

// myStack.stackPop()
// console.log(myStack.stackPop);

console.log(myStack.stackPeek());

console.log(`the stack is empty ? ${myStack.isEmpty()}`);
