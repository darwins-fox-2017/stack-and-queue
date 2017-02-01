'use strict'

class Stack {
  constructor () {
    this. arr = []
  }

  stackPush (val) {
    return this.arr.push(val)
  }

  stackPop () {
    return this.arr.pop()
  }

  stackPeek () {
    return this.stackPop()
  }

  isEmpty () {
    if(this.arr.length === 0){
      return 'is Empty'
    }else {
      return this.stackPeek()
    }
  }
}

var resultStack = new Stack()
    resultStack.stackPush("stack one")
    resultStack.stackPush("stack two")
    resultStack.stackPush("stack three")

console.log(resultStack.stackPop());
console.log(resultStack.stackPeek());
console.log(resultStack.isEmpty());
