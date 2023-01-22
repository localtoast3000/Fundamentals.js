import { inspect, performanceTest } from './dev_lib/util';
import DoublyLinkedList from './util/linked_list/doublyLinked';

const largeArray = Array(1100)
  .fill('')
  .map((x, i) => i + 1);

const list = new DoublyLinkedList(largeArray);

// inspect(singlyLinkedList, 30);
list.forEach((val: any, i: number) => {
  console.log({ [i]: val });
});
