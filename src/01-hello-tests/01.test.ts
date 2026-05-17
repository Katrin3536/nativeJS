import {mult, splitIntoWords, sum} from './01.ts';
import {test, expect, beforeEach} from 'vitest';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});


test('sum should be correct', () => {
    //data
    // let a = 1;
    // let b = 2;
    // let c = 3;

    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
});

test('multiply should be correct', () => {
    //data
    // let a = 1;
    // let b = 2;
    // let c = 3;

    //action
    const result1 = mult(a, b);
    const result2 = mult(a, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
});

test('splitting into words should be correct', () => {
    //data
    const sent1 = 'Hello World!';
    const sent2 = 'Programming language';

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expect result
    expect(result1.length).toBe(2);
    expect(result2.length).toBe(2);
    expect(result2[1]).toBe('language');
});