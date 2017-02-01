'use strict'

class Queue {
  constructor () {
    this.data = []
    this.maxSize = 5
  }

  queuePush (x) {
    if (this.isEmpty() === "Yes") {
      return `${this.data.push(x)} record added.\n`
    }
    else if (this.data.length > this.maxSize) {
      return "Queue is Full!\n"
    }
  }

  queueShift () {
    if (this.data.length === 0) {
      return "Data is empty!\n"
    } else {
      return `${this.data.shift()} deleted.\n`
    }
  }

  queuePeek () {
    return this.data[this.data.length-1]
  }

  isEmpty () {
    if (this.data.length < this.maxSize) {
      return "Yes"
    } else {
      return "Queue is Full!\n"
    }
  }
}

let myQueue = new Queue()

console.log(`The queue is empty? ${myQueue.isEmpty()}\n`)
myQueue.queuePush("Javascript")
myQueue.queuePush("is just so")
myQueue.queuePush("cool")

myQueue.queuePush(15)
myQueue.queuePeek()

console.log(myQueue.queueShift())
console.log(myQueue.queueShift())
console.log(myQueue.queueShift())
console.log(myQueue.queueShift())

console.log(`The queue is empty? ${myQueue.isEmpty()}\n`)
console.log(myQueue.queueShift())
