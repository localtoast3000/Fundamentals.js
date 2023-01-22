import { inspect, performanceTest } from './dev_lib/util';
import DoublyLinkedList from './util/linked_list/doublyLinked';

const largeArray = Array(1000)
  .fill('')
  .map((x, i) => i + 1);

const list = new DoublyLinkedList(largeArray);

list.forEachFromTail((val: any, i: number) => {
  console.log({ [i]: val });
});
