import Node from '../../data_structures/trees/binaryTree/node';
import { BTNodeType } from '../../data_structures/trees/binaryTree/types';

export default class CombinationsBinaryTree {
  _values: any[];
  _combinations: any[];
  _root: BTNodeType;

  constructor(values: any[] = []) {
    this._values = values;
    this._combinations = [];
    this._root = new Node([]);
    this.buildTree();
  }

  get values() {
    return this._values;
  }

  buildTree() {
    if (this._values.length === 0) return;
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
  }

  set values(values) {
    this._values = values;
    this.buildTree();
  }
}
