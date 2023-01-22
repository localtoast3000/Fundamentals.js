import Node from '../../blueprints/linked_lists/doubly_linked/node';
import { DLListNodeType } from '../../blueprints/linked_lists/doubly_linked/types';
import { performanceTest } from '../../dev_lib/util';

export default class DoublyLinkedList {
  private _head: DLListNodeType;

  constructor(values: any[] = []) {
    this._head = new Node(values[0]);
    this.buildList(values);
  }

  public get head() {
    return this._head;
  }

  public buildList(values: any[]) {
    if (values.length === 0) return;
    this.head.next = new Node(null);
    const reqursiveValueAssignment: any = (
      node: DLListNodeType,
      prev_node: DLListNodeType,
      val_i: number
    ) => {
      if (val_i === values.length) return;
      node.val = values[val_i];
      node.prev = prev_node;
      node.next = val_i + 1 === values.length ? null : new Node(null);
      return reqursiveValueAssignment(node.next, prev_node, val_i + 1);
    };
    reqursiveValueAssignment(this._head.next, this._head, 1);
  }

  public forEach(callback: Function) {
    const reqursiveForwardTravers: any = (node: DLListNodeType, idx: number) => {
      callback(node.val, idx);
      if (node.next === null) return;
      return reqursiveForwardTravers(node.next, idx + 1);
    };
    return reqursiveForwardTravers(this._head, 0);
  }
}
