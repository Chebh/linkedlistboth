

function factory() {
  function factory() {
    return {
      head: null,
      tail: null,
      append: function (value) {
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
      },
      prepend: function (value) {
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
      },
      size: function () {
        let current = this.head;
        let count = 0;
        while (current) {
          count++;
          current = current.next;
        }
        return count;
      },

      head: function () {
        return this.head;
      },

      tail: function () {
        return this.tail;
      },

      at: function (index) {
        let current = this.head;
        let count = 0;
        while (current) {
          if (count === index) {
            return current;
          }
          count++;
          current = current.next;
        }
        return null;
      },

      pop: function () {
        if (this.head === null) {
          return null;
        } else if (this.head === this.tail) {
          const value = this.head.value;
          this.head = null;
          return value;
        } else {
          let current = this.head;
          let previous = null;
          while (current.next) {
            previous = current;
            current = current.next;
          }
          previous.next = null;
          this.tail = previous;
          return current.value;
        }
      },

      contains: function (value) {
        let current = this.head;
        while (current) {
          if (current.value === value) {
            return true;
          }
          current = current.next;
        }
        return false;
      },

      find: function (value) {
        let current = this.head;
        let count = 0;
        while (current) {
          if (current.value === value) {
            return count;
          }
          count++;
          current = current.next;
        }
        return null;
      },

      toString: function () {
        let current = this.head;
        let string = "";
        while (current) {
          string += `{ ${current.value} } -> `;
          current = current.next;
        }
        string += "NULL";
        return string;
      },
      Node: function (value) {
        this.value = value;
        this.next = null;
      },
    };

  }
  return factory();
  };
 