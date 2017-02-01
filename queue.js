"use strict"

class Queue {
  constructor() {
    this.arr = [];
  }
  // method push, berguna untuk masukkan barang ke dalam arr
  push(barang) {
    this.arr.push(barang);
  }

  // method shift, berguna untuk menghapus barang paling pertama
  shift() {
    this.arr.shift();
  }

  // method peek, untuk menampilkan semua data yang ada di dalam arr
  peek() {
    return this.arr;
  }

  // isEmpty, untuk mengecek apakan arr sudah memiliki isi atau belum
  isEmpty() {
    if (this.arr.length == 0) {
      return "array kosong";
    } else {
      return "array sudah terisi";
    }
  }
}

var barang = new Queue();
barang.push("toyota");
barang.push("honda");
barang.push("mazda");
barang.push("nissan");
barang.push("ford");
console.log(barang.peek());
console.log(barang.peek());
console.log(barang.isEmpty());
