'use strict'

class Stack {
  constructor (value) {
    this.stack = value
  }

  stackPush (x) {
    this.stack.push(x)
  }

  stackPop () {
    this.stack.pop()
  }

  stackPeek () {
    return this.stack.shift()
  }

  isEmpty () {
    return this.stack.length == 0 ? true : false
  }
}

var tumpukanPiring = new Stack('Piring Kecil')
console.log(tumpukanPiring);
tumpukanPiring.stackPush('Piring Terbang')
console.log(tumpukanPiring);
