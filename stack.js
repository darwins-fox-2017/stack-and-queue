'use strict'

class Stack {
  constructor () {
    this.stack = [];
    this.maxSize = 4;
  }

  stackPush (x) {
    if (this.stack.length === this.maxSize) {
      console.log("Arr sudah penuh");
    } else {
      this.stack.push(x);
    }

  }

  stackPop () {
    this.stack.pop();
  }

  stackPeek () {
    return this.stack[this.stack.length -1];
  }

  isEmpty () {
    return this.stack.length === 0; 
  }

  stactSize(newSize) {
    this.stack = newSize;
  }

  isFull() {
    let penuh = this.stack.length === this.maxSize;
    return penuh
  }

  
}

let myStack = new Stack()
myStack.stackPush("JavaScript");
myStack.stackPush("Is just so");
myStack.stackPush("Cool");
myStack.stackPush("Daniel");
myStack.stackPush("Agus");
// cek penuh apa ngga
// console.log(myStack.isFull());
//console.log(myStack.stack);
  
myStack.stackPop();
console.log(myStack);
// console.log(myStack.StackPop());
// console.log(myStack.StackPop());
// console.log(myStack.StackPop());
// console.log(myStack.StackPop());

// console.log(myStack[3];
// console.log(myStack);
// console.log(`Stack kosong gak? ${myStack.stackPush()}`);
// console.log(`Stack kosong gak? ${myStack.stackPeek()}`);
//console.log(myStack.StackPop());
