'use strict'

class Queue {
  constructor () {
    this.arr = []
  }
  queuePush(x) {
    this.arr.push(x);
    console.log("Data sudah di tambahkan");
    console.log(this.arr)
  }

  queueShift() {
    this.arr.shift();
    console.log("Data terhapus")
    console.log(this.arr)
  }

  queuePeek() {
    return this.array;
  }

  isEmpty() {
    if (this.arr.length == 0) {
      return "Data sudah kosong"
    } else if (this.arr.length >= 10) {
      return "Data sudah penuh";
    }else{
      return "Dapat Menambah Data Lagi"
    }
  }
}

let stackNew = new Queue()

console.log(`The stack is empty? ${stackNew.isEmpty()}`)
// menambahkan
stackNew.queuePush("Belajar")
stackNew.queuePush("JavaScript")
stackNew.queuePush("express")
stackNew.queuePush("Node.js")

//Menghapus
stackNew.queueShift()
stackNew.queueShift()
// stackNew.queueShift()
// stackNew.queueShift()
// stackNew.queueShift()
// stackNew.queueShift()
console.log(`${stackNew.isEmpty()}`)
