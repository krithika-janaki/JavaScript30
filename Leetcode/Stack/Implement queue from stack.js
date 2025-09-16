class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
      this.stack1.push(x);

      //reverse stack
      if(this.stack1.length) {
        while(this.stack1.length > 0) {
            let temp = this.stack1.pop();
            this.stack2.push(temp);

        }
      }
    }

    /**
     * @return {number}
     */
    pop() {}

    /**
     * @return {number}
     */
    peek() {}

    /**
     * @return {boolean}
     */
    empty() {}
}
