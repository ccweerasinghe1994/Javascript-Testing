import { it, expect } from 'vitest';
import { add } from './math';

it('it should summarize all number values in an Array', () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
