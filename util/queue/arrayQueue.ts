export default class ArrayQueue {
  private _queue: any[];

  constructor() {
    this._queue = [];
  }
  get queue() {
    return this._queue;
  }
  enqueue() {
    this._queue.push();
  }
  dequeue() {
    const last = this._queue.pop();
    return;
  }
}
