'use strict'

class Queue {
  constructor () {
    this.queueArr = []
    this.MAXSIZE = 5

  }

  queuePush (value) {
    if(this.isfull()){
      console.log("sudah penuh");
    }else {
      this.queueArr.push(value)
    }
  }

  queuePop () {
    this.queueArr.shift()
    return "one item deleted"
  }

  queuePeek () {
    return this.queueArr.slice(0,1).join(" ")
  }

  isEmpty () {
    if(this.queueArr[0] === undefined){
      return "true"
    } else {
      return "false"
    }
  }

  isfull(){
    if (this.queueArr.length > this.MAXSIZE){
      return true
    }
    return false
  }
}

let myQueue = new Queue()
myQueue.queueArr.push("javascript")
myQueue.queueArr.push("is just so")
myQueue.queueArr.push("Queue 1")
myQueue.queueArr.push("Queue 2")
myQueue.queueArr.push("Queue 3")



console.log(myQueue)

// myQueue.queuePop()
// console.log(myQueue.queuePop);

console.log(myQueue.queuePeek());

console.log(`the queue is empty ? ${myQueue.isEmpty()}`);
