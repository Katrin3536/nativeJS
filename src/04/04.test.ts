import {test, expect} from 'vitest';
import type {CourseType} from './04.ts';

test("should take old man older then 90",()=>{
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses cheeper then 160",()=>{
    const courses: CourseType[] = [
        {title: 'JS', price: 100},
        {title: 'TS', price: 200},
        {title: 'CSS', price: 150},
    ];


    const cheep = courses.filter(course => course.price < 160)

    expect(cheep.length).toBe(2)
    expect(cheep[0].price).toBe(100)
})

test('get only completed task', ()=>{
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Eggs', isDone: false},
        {id:4, title: 'Pasta', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted task', ()=>{
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Eggs', isDone: false},
        {id:4, title: 'Pasta', isDone: true},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})