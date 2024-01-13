import LinkedList from './linkedList.js';
class HashMap {
  constructor() {
    const loadFactor = 0.75;
    this.buckets = [];
    this.capacity = 16;
  }
  hash(value) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }
    return hashCode;
  }
  set(key, value) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].containsKey(key)) {
        let index = this.buckets[i].findKey(key);
        this.buckets[i].at(index).value = value;
        break;
      } else {
        if (this.buckets[i].length / this.capacity > loadFactor) {
          this.capacity += 1;
        }
      }
    }
    return null;
  }
  get(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].containsKey(key)) {
        let index = this.buckets[i].findKey(key);
        let aux = this.buckets[i].at(index);
        return aux;
      }
    }
    return null;
  }
  has(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].containsKey(key)) {
        let index = this.buckets[i].findKey(key);
        return true;
      }
    }
    return false;
  }
  remove(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].containsKey(key)) {
        let index = this.buckets[i].findKey(key);
        this.buckets[i].removeAt(index);
      }
    }
  }
  length() {
    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      count += this.buckets[i].size();
    }
    return count;
  }
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = null;
    }
  }
  keys() {
    let tmp = [];
    for (let i = 0; i < this.buckets.length; i++) {
      tmp.push(this.buckets[i].key);
    }
    return tmp;
  }
  values() {
    let tmp = [];
    for (let i = 0; i < this.buckets.length; i++) {
      tmp.push(this.buckets[i].value);
    }
    return tmp;
  }
  entries() {
    let tmp = [];
    for (let i = 0; i < this.buckets.length; i++) {
      tmp.push([this.buckets[i].key, this.buckets[i].value]);
    }
    return tmp;
  }
}
