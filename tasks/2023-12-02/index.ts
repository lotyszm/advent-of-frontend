export class ChristmasQueue<T> {

  queue: [T, number][] = [];

  enqueue = (priority: T, priorityNumber: number) => {
    this.queue.push([priority, priorityNumber]);
    this.queue.sort((a, b) => b[1] - a[1]);
  }

  dequeue = () => {
    if(this.isEmpty()) {
      throw new Error('There are no letters in the queue!');
    }
    return this.queue.shift()?.[0];
  }

  isEmpty = () => {
    return this.queue.length === 0;
  }
}