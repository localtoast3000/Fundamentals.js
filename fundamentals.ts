import { inspect, performanceTest } from './dev_lib/util';
import CombinationsBinaryTree from './util/combinations/combinationTree';

// Tree build time on array of 23 elements = 4.1079844999313355 seconds

const largeArray = Array(30)
  .fill('')
  .map((x, i) => i + 1);

const combinationTree = new CombinationsBinaryTree(largeArray);
// inspect(combinationTree._combinations, 1);
