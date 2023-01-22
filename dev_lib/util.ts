import util from 'util';
import { performance } from 'perf_hooks';

export function inspect(itemToInspect: any, depth: number) {
  console.log(util.inspect(itemToInspect, false, depth, true));
}

export function performanceTest(testName: string, funcReference: Function, args: any[]) {
  const start = performance.now();
  funcReference(...args);
  const end = performance.now();
  const time = end - start;

  console.log(`
Execution time of ${testName}: ${time / 1000} seconds
`);
}
