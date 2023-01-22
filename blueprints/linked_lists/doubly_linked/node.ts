import { DLListNodeType } from './types';

export default class Node implements DLListNodeType {
  private _val;
  private _prev: DLListNodeType | null;
  private _next: DLListNodeType | null;

  constructor(val: any) {
    this._val = val;
    this._prev = null;
    this._next = null;
  }

  public get val() {
    return this._val as any;
  }
  public get prev() {
    return this._prev as DLListNodeType;
  }
  public get next() {
    return this._next as DLListNodeType;
  }
  public set val(val: any) {
    this._val = val;
  }
  public set next(node: DLListNodeType) {
    this._next = node;
  }
  public set prev(node: DLListNodeType) {
    this._prev = node;
  }
}
