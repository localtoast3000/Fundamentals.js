import Node from '../../data_structures/trees/binaryTree/node';
import { BTNodeType } from '../../data_structures/trees/binaryTree/types';
import { performanceTest } from '../../dev_lib/util';

export default class CombinationsBinaryTree {
  private _values: any[];
  private _combinations: any[];
  private _root: BTNodeType;

  constructor(values: any[] = []) {
    this._values = values;
    this._combinations = [];
    this._root = new Node([]);
    this.buildTree();
  }

  public get values() {
    return this._values;
  }

  public set values(values) {
    this._values = values;
    this.buildTree();
  }

  public buildTree() {
    if (this._values.length === 0) return;
    performanceTest(
      'Tree build',
      () => {
        this._root.left = new Node([]);
        this._root.right = new Node([this._values[0]]);

        const reqursiveValueAssignment = (row: BTNodeType[], valuesIdx: number) => {
          if (valuesIdx === this._values.length) {
            this._combinations = row.map((node) => node.val);
            return;
          }
          let children: BTNodeType[] = [];

          for (let node of row) {
            node.left = new Node(node.val);
            node.right = new Node([...node.val, this._values[valuesIdx]]);
            children.push(node.left, node.right);
          }
          reqursiveValueAssignment(children, valuesIdx + 1);
        };
        reqursiveValueAssignment([this._root.left, this._root.right], 1);
      },
      []
    );
  }
}
