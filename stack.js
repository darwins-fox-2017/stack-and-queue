'use strict'

class Stack {
  constructor (data=[]) {
    this.data=data;
    this.maxZise=3;

  }
  stackPush (x) {
    if (this.data.length<this.maxZise) {
      this.data.push(x);
    }else {
      console.log('stack full!');
    }
    return this
  }
  stackSetMax(x){
    this.maxZise=x;
    return this;
  }
  stackPop () {
    this.data.pop()
    return this;
  }

  stackPeek () {
    let lastData=this.data.length-1;
    return this.data[lastData];
  }

  isEmpty () {
    if (this.data.length==0) {
      return true;
    }else{
      return false;
    }
  }
  isFull(){
    if (this.data.length==this.maxZise) {
      return true;
    }else{
      return false;
    }
  }
}
let mydata=new Stack();
console.log(`the stack is empety ? ${mydata.isEmpty()}`);
mydata.stackPush(3).stackPush('hai').stackPush(['apa','kabar']);
console.log(`the stack is full ? ${mydata.isFull()}`);
console.log('data terakhir : ' +mydata.stackPeek());
mydata.stackPush('lima');
mydata.stackPop().stackPop().stackPop();
console.log(`the stack is empety ? ${mydata.isEmpty()}`);

//tidak ada method untuk mengakses data pada titk tertentu karena secara prinsip stack memang tidak bisa untuk mengakses data selain yang paling atas
