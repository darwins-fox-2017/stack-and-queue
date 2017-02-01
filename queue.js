'use strict'

class Queue {
  constructor () {
    this.arr = []
  }

  queuePush(val){
    return this.arr.push(val)
  }

  queueShift(){
    return this.arr.shift()
  }

  queuePeek(){
    return this.queueShift()
  }

  isEmpty(){
    if(this.arr.length === 0){
      return 'is Empty'
    }else {
      return this.queuePeek()
    }
  }
}

var resultQueue = new Queue();
    resultQueue.queuePush('queue one')
    resultQueue.queuePush('queue two')
    resultQueue.queuePush('queue three')

console.log(resultQueue.queueShift());
console.log(resultQueue.queuePeek());
console.log(resultQueue.isEmpty());
