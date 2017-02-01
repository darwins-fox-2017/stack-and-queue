'use strict'

class Stack {
  constructor () {
    this. arr     = []
    this.MAX_SIZE = 4
  }

  isFull(){
    if(this.arr.length >= this.MAX_SIZE ){
      return true
    }else {
      return false
    }
  }

  stackPush (val) {
    if (this.isFull()) {
      console.log('stack is full');
    }else {
      return this.arr.push(val)
    }
  }

  stackPop () {
    return this.arr.pop()
  }

  stackPeek () {
    return this.arr[this.arr.length-1];
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
    resultStack.stackPush("stack four")
    resultStack.stackPush("stack five")



console.log(resultStack.stackPop());
// resultStack.print();
console.log(resultStack.stackPeek());
// resultStack.print();
console.log(resultStack.isEmpty());
// resultStack.print();
