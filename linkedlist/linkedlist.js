function linkedList() {
  this.head = null;
  this.tail = null;
  this.append = function (value) {
    if (this.head === null) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
    } else {
      this.tail.next = {
        value: value,
        next: null,
      };
      this.tail = this.tail.next;
    }
  };
  this.prepend = function (value) {
    if (this.head === null) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
    } else {
      this.head = {
        value: value,
        next: this.head,
      };
    }
  };
  this.size = function () {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  };
  this.gethead = function () {
    return this.head;
  };
  this.gettail = function () {
    return this.tail;
  };
  this.at= function(index){
    if(index<0 || index>this.size()){
      return null;
    }
    let current = this.head;
    let count = 0;
    while(current){
      if(count === index){
        return current;
      }
      current = current.next;
      count++;
    }
  };
  this.pop=function(){
    if(this.head === null){
      return null;
    }
    if(this.head === this.tail){
      let value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    let value = this.tail.value;
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    return value;
  };
  this.contains=function(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  };
  this.find = function (value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === value) {
        return count;
      }
      current = current.next;
      count++;
    }
    return null;
  };
  this.toString = function () {
    let current = this.head;
    let string = "";
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += "NULL";
    return string;
  };
  this.insert = function (value, index) {
    if (index < 0 || index > this.size()) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size()) {
      this.append(value);
      return true;
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.at(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    return true;
  };
this.removeAt = function (index) {
  if (index < 0 || index > this.size()) {
    return null;
  }
  if (index === 0) {
    this.head = this.head.next;
    return true;
  }
  if (index === this.size() - 1) {
    this.tail = this.tail.next;
    return true;
  }
  const leader = this.at(index - 1);
  const follower = leader.next.next;
  leader.next = follower;
  return true;
},
  
  this.Node = function (value) {
    this.value = value;
    this.next = null;
  };
};

const linked = new linkedList();

linked.append(1);
linked.append(2);
linked.append(3);
linked.append(4);
linked.size();
linked.gethead();
linked.gettail();
linked.at(2);
linked.pop();
linked.contains(3);
linked.find(2);
linked.toString();
linked.insert(5, 2);
linked.removeAt(2);
linked.toString();


/*linked.prepend(0);
linked.append(2);
linked.append(3);
linked.append(4);
linked.size();
linked.gethead();
linked.gettail();
linked.at(2);
linked.pop();
linked.contains(3);
linked.find(2);
linked.toString();
linked.insert(5, 2);
linked.removeAt(2);
linked.toString();*/


