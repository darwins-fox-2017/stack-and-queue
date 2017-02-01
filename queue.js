'use strict'

class Queue {
  constructor () {
    this.stack = []
    this.max = 5
  }

  queueInsert (x) {
    if(!this.isFull()){
      this.stack.push(x)
      console.log(`${x} has been added`)
    }else {
      console.log(`stack is full `)
    }
  }

  queueRemove () {
    let word = this.stack[0]
    this.stack.shift()
    return `${word} has been removed`
  }

  queuePeek () {
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


var myQueue = new Queue()

console.log(`The stack is empty? ${myQueue.isEmpty()}`);

myQueue.queueInsert("Javascript")
myQueue.queueInsert("is just so")
myQueue.queueInsert("cool")
myQueue.queueInsert(15)
myQueue.queueInsert(9)
myQueue.queueInsert(5)

myQueue.queueRemove() // remove element pertama pada array
myQueue.queuePeek()

console.log(myQueue.isFull())
console.log(`The stack is empty? ${myQueue.isEmpty()}`)
