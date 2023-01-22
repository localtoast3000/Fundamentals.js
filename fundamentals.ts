import { inspect, performanceTest } from './dev_lib/util';
import LinkedQueue from './util/queue/linkedQueue';

const largeArray = Array(2)
  .fill('')
  .map((x, i) => i + 1);

const list = new LinkedQueue(largeArray);
inspect(list, 2);
