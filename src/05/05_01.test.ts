import {createGreetingMessage, type ManType} from './05_01.ts';
import {beforeEach,test,expect} from 'vitest';

let people: Array<ManType>=[]

beforeEach(()=>{
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ];
})

test("should get array of greeting messages",()=>{

    const massages = createGreetingMessage(people)
    expect(massages.length).toBe(3);
    expect(massages[0]).toBe("Hello Andrew! Welcome to IT");
})