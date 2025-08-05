class Stack {
  constructor(size) {
    this.size = size;
    this.stack = new Array(size);
    this.top = -1;
  }

  push(el) {
    if (this.top >= this.size - 1) {
      console.log("stack overflow");
      return;
    }
    this.top++;
    this.stack[this.top] = el;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }

    const popped = this.stack[this.top];
    this.top--;
    return popped;
  }

  isEmpty() {
    return this.top === -1;
  }

  peak() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    console.log(this.stack[this.top]);
    return this.stack[this.top];
  }

  print() {
    let result = "";
    for (let i = 0; i <= this.top; i++) {
      result = result + this.stack[i];
      if (i < this.top) {
        result = result + "->";
      }
    }
    console.log(result);
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.peak();
stack.print();
