'use strict'

class Queue {
  constructor () {
    this.arr      = []
    this.MAX_SIZE = 4
  }

  queuePush(val){
    if(this.isFull()){
      console.log('queue is full');
    }else {
      return this.arr.push(val)
    }
  }

  queueShift(){
    return this.arr.shift()
  }

  queuePeek(){
    return this.arr[this.arr.length-1]
  }

  isEmpty(){
    if(this.arr.length === 0){
      return 'is Empty'
    }else {
      return this.queuePeek()
    }
  }

  isFull(){
    if(this.MAX_SIZE <= this.arr.length){
      return true
    }else {
      return false
    }
  }
}

var resultQueue = new Queue();
    resultQueue.queuePush('queue one')
    resultQueue.queuePush('queue two')
    resultQueue.queuePush('queue three')
    resultQueue.queuePush('queue four')
    resultQueue.queuePush('queue five')

console.log(resultQueue.queueShift());
console.log(resultQueue.queuePeek());
console.log(resultQueue.isEmpty());
