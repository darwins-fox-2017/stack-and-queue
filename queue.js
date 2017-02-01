'use strict'

// First in first out
class Queue {
  constructor () {
  	this.queue = [];
  }

  queuePush(x) {
  	this.queue.push(x);
  }

  queuePop() {
  	this.queue.splice(0, 1);
  }
}
let myQueue = new Queue()
// tambah data
myQueue.queuePush("Mobil")
myQueue.queuePush("Motor")
myQueue.queuePush("Kapal")
myQueue.queuePush("Pesawat")

// hapus data
myQueue.queuePop()
console.log(myQueue);


