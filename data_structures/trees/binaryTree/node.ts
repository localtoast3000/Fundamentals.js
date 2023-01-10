import { BTNodeType } from './types';

export default class Node {
  _val: any;
  _left: BTNodeType | null;
  _right: BTNodeType | null;

  constructor(val: any) {
    this._val = val;
    this._left = null;
    this._right = null;
  }

  get val() {
    return this._val as any;
  }
  get left() {
    return this._left as BTNodeType;
  }
  get right() {
    return this._right as BTNodeType;
  }

  set val(val: any) {
    this._val = val;
  }
  set left(node: BTNodeType) {
    this._left = node;
  }
  set right(node: BTNodeType) {
    this._right = node;
  }
}
