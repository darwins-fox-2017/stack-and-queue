'use strict'

class Stack {
  constructor (value) {
    this.stack = [value]
    this.MAX_SIZE = 3
  }

  stackPush (x) {
    if (!this.isFull) {
      console.log(`Sorry, you can't add more data to the stack, coz it already full!`);
    } else {
      this.stack.push(x)
    }
  }

  setMaxSize (x) {
    this.MAX_SIZE = x
  }

  getMaxSize (){
    return this.MAX_SIZE
  }

  stackPop () {
    this.stack.pop()
  }

  stackPeek () {
    return this.stack[this.stack.length -1]
  }

  isEmpty () {
    return this.stack.length == 0
  }

  isFull () {
    console.log('isinya berapa ? ' + this.stack.length);
    return this.stack.length >= this.MAX_SIZE 
  }
  print() {

  }
}

var tumpukanPiring = new Stack('Piring Kecil')
console.log(tumpukanPiring);
tumpukanPiring.stackPush('Piring Terbang')
console.log('Apakah udah penuh ? ' + tumpukanPiring.isFull());
console.log('Sesudah tambah data : ', tumpukanPiring);
tumpukanPiring.stackPush('Piringan Kaset')
console.log('Sesudah tambah data lagi : ', tumpukanPiring);
console.log('stack peek : ' + tumpukanPiring.stackPeek());

console.log('Apakah udah penuh ? ' + tumpukanPiring.isFull());
console.log('Sedudah di pop satu : ', tumpukanPiring);
tumpukanPiring.stackPop()
tumpukanPiring.stackPop()
console.log('Sedudah di pop lagi : ', tumpukanPiring);
console.log(`The stack is empty ? ${tumpukanPiring.isEmpty()}`);
