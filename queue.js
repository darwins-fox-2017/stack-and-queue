'use strict'

class Queue {
  constructor () {
    this.arr = [];
    this.MAX_SIZE = 5
  }
  queuePush(x) {
    if(this.arr.length < this.MAX_SIZE)
    this.arr.push(x)
    else {
      console.log("Antrian sudah penuh mas.")
    }
  }
  queuePop() {
    if(this.arr.length === 0)
      console.log("Antrian sudah kosong mas, tidak ada lagi yang antri");
    else
    this.arr.shift()
    return this.arr
  }
  queueView() {
    return this.arr
  }
  isEmpty () {
    if(this.arr.length === 0)
      return "Antrian kosong"
    else
      return "Lagi ada antrian"
  }
}

let myQueue = new Queue()

myQueue.queuePush("Javascript")
myQueue.queuePush("Is Great")
myQueue.queuePush("and Cool")
myQueue.queuePush("and Ohh Shitt..")

myQueue.queuePush(15)
console.log(myQueue.queueView())

myQueue.queuePush("test full")

console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log("test pop stack kosong")

console.log(myQueue.queuePop())

console.log(myQueue.isEmpty())
