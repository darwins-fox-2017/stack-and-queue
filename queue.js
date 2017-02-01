'use strict'

class Queue {
  constructor () {
    this.arr = []
  }

  queueInsert(x) {
    return this.arr.unshift(x)
  }

  queueRemove() {
    return this.arr.shift()
  }

  queuePeek() {
    return this.arr
  }

  isEmpty () {
    if (this.arr.length == 0) {
      return `yes it's empty`
    } else {
      return `no, it's: ${this.queuePeek()}`
    }
  }

  isFull() {
    if (this.arr.length >= 5) {
      return `queue is full, you can't add more queue`
    } else {
      return this.queueInsert()
    }
  }
}


let myQueue = new Queue()
console.log(`The Queue is empty? ${myQueue.isEmpty()}`);

myQueue.queueInsert(15)
myQueue.queueInsert('hacktiv8')
myQueue.queueInsert('full stack')
myQueue.queueInsert('web developer')
myQueue.queueInsert('javascript')
myQueue.queueInsert('HTML')
console.log(myQueue.queuePeek())

console.log(myQueue.isFull());
console.log(`The stack is empty? ${myQueue.isEmpty()}`);

console.log(`removing stack: ${myQueue.queueRemove()}`);
console.log(`removing stack: ${myQueue.queueRemove()}`);
console.log(`removing stack: ${myQueue.queueRemove()}`);
console.log(`removing stack: ${myQueue.queueRemove()}`);
// console.log(myQueue);
myQueue.queueInsert('HTML')
console.log(myQueue.queuePeek());
