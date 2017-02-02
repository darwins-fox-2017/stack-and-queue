'use strict'

class Queue {
  constructor (data=[]) {
    this.data=data;
    this.maxZise=3;
  }
  stackInsert (x) {
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

  stackRemove () {
    this.data.shift();
    return this;
 }

 stackPeek () {
   let firstData=0;
   console.log("------",this.data);
  return this.data[firstData];

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

let mydata= new Queue();

console.log(`the stack is empety ? ${mydata.isEmpty()}`);
mydata.stackInsert(3).stackInsert('hai').stackInsert(['apa','kabar']);
console.log(`the stack is full ? ${mydata.isFull()}`);
console.log('data pertama : ' +mydata.stackPeek());
mydata.stackInsert('lima');
mydata.stackRemove().stackRemove().stackRemove();
console.log(`the stack is empety ? ${mydata.isEmpty()}`);
