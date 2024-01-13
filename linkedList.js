export default class LinkedList {
  constructor() {
    this.listHead = null;
  }
  prepend(value) {
    let aux = null;
    if (this.listHead != null) {
      aux = this.listHead;
    }
    this.listHead = new Node(value);
    this.listHead.pointer = aux;
  }
  append(value) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let aux = this.listHead;
      while (aux.pointer !== null) {
        aux = aux.pointer;
      }
      aux.pointer = new Node(value);
    }
  }
  size() {
    let index = 0;
    let aux = this.listHead;
    while (aux.pointer !== null) {
      aux = aux.pointer;
      index++;
    }
    return index;
  }
  head() {
    return this.listHead;
  }
  tail() {
    let aux = this.listHead;
    while (aux.pointer !== null) {
      aux = aux.pointer;
    }
    return aux;
  }
  at(index) {
    let count = 0;
    let aux = this.listHead;
    while (aux.pointer !== null && count < index) {
      aux = aux.pointer;
    }
    if (aux === null) {
      return 'There is no item at this index';
    } else {
      return aux;
    }
  }
  pop() {
    let aux = this.listHead;
    let scnd_aux = aux.pointer;
    while (scnd_aux.pointer !== null) {
      aux = aux.pointer;
      scnd_aux = scnd_aux.pointer;
    }
    aux.pointer = null;
  }
  contains(value) {
    let aux = this.listHead;
    while (aux.pointer !== null) {
      if (aux.value === value) {
        return true;
      }
      aux = aux.pointer;
    }
    return false;
  }
  conatinsKey(key) {
    let aux = this.listHead;
    while (aux.pointer !== null) {
      if (aux.key === key) {
        return true;
      }
      aux = aux.pointer;
    }
    return false;
  }
  find(value) {
    let aux = this.listHead;
    let index = 0;
    while (aux.pointer !== null) {
      if (aux.value === value) {
        return index;
      }
      index++;
      aux = aux.pointer;
    }
    return 'No item found';
  }
  findKey(key) {
    let aux = this.listHead;
    let index = 0;
    while (aux.pointer !== null) {
      if (aux.key === key) {
        return index;
      }
      index++;
      aux = aux.pointer;
    }
    return 'No item found';
  }
  toString() {
    let tmp = this.listHead;
    let stringList = '';
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.pointer;
    }
    return (stringList += 'null');
  }
  insertAt(value, index) {
    let count = 0;
    let aux = this.listHead;
    while (aux.pointer !== null && count < index - 1) {
      aux = aux.pointer;
    }
    if (aux.pointer === null) {
      this.append(value);
    } else {
      let newPointer = aux.pointer;
      aux.pointer = new Node(value, newPointer);
    }
  }
  removeAt(index) {
    if (this.listHead == null) return 'List is already empty';
    let cur = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.pointer;
      if (cur == null) return 'There is no item for this index';
    }
    prev.pointer = cur.pointer;
  }
}

class Node {
  constructor(value = null, pointer = null, key = null) {
    this.key = key;
    this.value = value;
    this.pointer = null;
  }
}
