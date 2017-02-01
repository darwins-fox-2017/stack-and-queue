'use strict'

class Stack {
  constructor () {
    this.arr = []
  }

  stackPush (x) {
    this.arr.push(x)
    console.log("Data sudah di tambahkan");
    console.log(this.arr)
  }

  stackPop () {
    this.arr.pop()
    console.log("Data terhapus")
    console.log(this.arr)
  }

  stackPeek () {
    return this.arr;
  }

  isEmpty () {
    if(this.arr.length == 0){
      return `Empty`
    }else if(this.arr.length > 0){
      return `Full`
    }
  }
}

let myStack = new Stack()
//mengecek stack isi atau kosong?
// console.log(`The stack is empty? ${myStack.isEmpty()}`);
//true jika stack kosong
//false jika stack memiliki nilai/lebih

//tambahkan tiga
myStack.stackPush("Belajar")

myStack.stackPush("JavaScript")
myStack.stackPush("its so")
myStack.stackPush("cool")
myStack.stackPush(1)
myStack.stackPush(2)

myStack.stackPop()
myStack.stackPop()
// console.log(`The stack ${myStack.isEmpty()}`)
