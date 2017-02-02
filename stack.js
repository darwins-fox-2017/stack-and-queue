'use strict'

class Stack {
  constructor () {
    this.stack = []
    this._MAX_SIZE = 5
  }

  stackPush (x) {
    if (this.isFull()) console.log('Array is full')
    else this.stack[this.stack.length] = x
  }

  stackPop () {
    this.stack.splice(this.stack.length-1, 1)
  }

  stackPeek () {
    return this.stack[this.stack.length-1]
  }

  isEmpty () {
    return this.stack.length === 0
  }

  setMax (maxValue) {
    this._MAX_SIZE = maxValue
  }

  getMax () {
    return this._MAX_SIZE
  }

  isFull () {
    return this.stack.length === this._MAX_SIZE
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.stackPush('Stack 1')
stack.stackPush('Stack 2')
stack.stackPush('Stack 3')
stack.stackPush('Stack 4')
stack.stackPush('Stack 5')
stack.stackPush('Stack 6')
console.log(stack.stackPeek())
stack.stackPop()
console.log(stack.isEmpty())
console.log(stack.stack);
