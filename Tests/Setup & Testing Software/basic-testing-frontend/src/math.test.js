import { it, expect } from 'vitest.js';
import { add } from './math.js';

it('it should summarize all number values in an Array', () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
