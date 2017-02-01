'use strict'

class Queue {
  constructor () {
    this.arr = []
    this._MAX_SIZE = 4
  }

  queueInsert(x) {
    if (this.isFull()) {
      return "Stack Full"
    } else {
      console.log(this.arr)
      return this.arr.push(x)
    }
  }

  queueRemove() {
    if (this.isEmpty()) {
      return "Stack Kosong"
    } else {
      console.log(this.arr)
      return this.arr.shift()
    }
  }

  queueFirst()  {
    return "Antrian Pertama : " + this.arr[0]
  }

  isFull() {
    if (this.arr.length === this._MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.arr.length <= 0) {
      return true
    } else {
      return false
    }
  }
}

let myQueue = new Queue();

console.log(`The stack is empty? ${myQueue.isEmpty()}`)
myQueue.queueInsert("JavaScript")
myQueue.queueInsert("is just so")
myQueue.queueInsert("cool")
myQueue.queueInsert(15)

console.log(myQueue.queueFirst())

console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())

console.log(`The stack is empty? ${myQueue.isEmpty()}`)
console.log(myQueue.queueRemove())
