import { BTNodeType } from './types';

export default class Node {
  private _val: any;
  private _left: BTNodeType | null;
  private _right: BTNodeType | null;

  constructor(val: any) {
    this._val = val;
    this._left = null;
    this._right = null;
  }

  public get val() {
    return this._val as any;
  }
  public get left() {
    return this._left as BTNodeType;
  }
  public get right() {
    return this._right as BTNodeType;
  }

  public set val(val: any) {
    this._val = val;
  }
  public set left(node: BTNodeType) {
    this._left = node;
  }
  public set right(node: BTNodeType) {
    this._right = node;
  }
}
