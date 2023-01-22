import Node from '../../blueprints/linked_lists/singly_linked/node';
import { SLListNodeType } from '../../blueprints/linked_lists/singly_linked/types';
import { performanceTest } from '../../dev_lib/util';

export default class SinglyLinkedList {
  private _head: SLListNodeType;

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
    const reqursiveValueAssignment: any = (node: SLListNodeType, val_i: number) => {
      if (val_i === values.length) return;
      node.val = values[val_i];
      node.next = val_i + 1 === values.length ? null : new Node(null);
      return reqursiveValueAssignment(node.next, val_i + 1);
    };
    reqursiveValueAssignment(this._head.next, 1);
  }

  public forEach(callback: Function) {
    const reqursiveForwardTravers: any = (node: SLListNodeType, idx: number) => {
      callback(node.val, idx);
      if (node.next === null) return;
      return reqursiveForwardTravers(node.next, idx + 1);
    };
    return reqursiveForwardTravers(this._head, 0);
  }
}
