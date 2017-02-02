'use strict'

class Queue {
  constructor () {
    this.queue = [] 
    this._MAX_SIZE = 5
  }

  queueInsert (x) {
    if (this.isFull()) console.log('Array is full')
    else this.queue[this.queue.length] = x
  }

  queueRemove () {
    this.queue.splice(0, 1)
  }

  queuePeek () {
    return this.queue[0]
  }

  isEmpty () {
    return this.queue.length === 0
  }

  setMax (maxValue) {
    this._MAX_SIZE = maxValue
  }

  getMax () {
    return this._MAX_SIZE
  }

  isFull () {
    return this.queue.length === this._MAX_SIZE
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.queueInsert('Queue 1')
queue.queueInsert('Queue 2')
queue.queueInsert('Queue 3')
queue.queueInsert('Queue 4')
queue.queueInsert('Queue 5')
queue.queueInsert('Queue 6')
console.log(queue.queuePeek())
queue.queueRemove()
console.log(queue.isEmpty())
console.log(queue.queue);
