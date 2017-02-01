'use strict'

class Queue {
  constructor (value) {
    this.queue = [value]
  }
  queuePush(x){
    this.queue.push(x)
  }

  queuePop(){
    this.queue.shift()
  }


}

var antrianBus = new Queue('bus 1')

console.log(antrianBus);

antrianBus.queuePush('bus 2')
console.log('setelah ditambah satu bus : ', antrianBus);
antrianBus.queuePush('bus 3')
console.log('setelah ditambah satu bus : ', antrianBus);
antrianBus.queuePop()
console.log('Setelah di kurang satu bus : ', antrianBus);
