import { describe, expect, test } from 'vitest';
//import { sum } from './sum.js';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);

    //Preparacion
    const a = 1;
    const b = 2;

    // estimulo
    const result = sum(a, b);

    //El comportamiento esperado
    expect(result).toBe(3);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const arr = [];
    const result = addArray(arr);

    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = addArray(arr);

    expect(result).toBe(15);
  });
});
