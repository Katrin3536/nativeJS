import type {Student} from '../02/02.ts';
import {beforeEach,test,expect} from 'vitest';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03.ts';

let student: Student;

beforeEach(()=>{
    student={
        id:1,
        name: 'Dim',
        age: 25,
        isActive: false,
        address: {
            streetTitle: 'Bobrova,3',
            city: {
                title: 'Stolin',
                countryTitle: 'Spain'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'TS'
            },
            {
                id: 3,
                title: 'JS'
            },
        ]
    };
})

test("new tech skill should be added to student", () => {

    expect(student.technologies.length).toBe(3)

     addSkill(student,"CSS");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("CSS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {

    expect(student.isActive).toBe(false)

    makeStudentActive(student);

    expect(student.isActive).toBe(true)

})

test("does student live in certain city", () => {

    const result1= doesStudentLiveIn(student, "Moscow");
    const result2= doesStudentLiveIn(student, "Stolin");

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

