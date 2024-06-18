class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}

// * Implementation
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getElements()); // Output: [10, 20, 30]

queue.dequeue();

console.log(queue.getElements()); // Output: [20, 30]
