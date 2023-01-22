import { SLListNodeType } from './types';

export default class Node implements SLListNodeType {
  private _val;
  private _next: SLListNodeType | null;

  constructor(val: any) {
    this._val = val;
    this._next = null;
  }

  public get val() {
    return this._val as any;
  }
  public get next() {
    return this._next as SLListNodeType;
  }
  public set val(val: any) {
    this._val = val;
  }
  public set next(node: SLListNodeType) {
    this._next = node;
  }
}
