import {beforeEach, expect, test} from 'vitest';

export type ManType = {
    name: string;
    age: number;
    lessons:Array<{title:string}>
    address: {street:{title:string}}
}

let props:ManType;
 beforeEach(()=>{
     props = {
         name:"Kolya",
         age:32,
         lessons: [{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}],
         address: {
             street:{
                 title:"sjgfsdj"
             }
         }
     }
 })

test('', ()=> {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age,lessons}= props   // const {age:a,lessons:l}= props - задаем псевдонимы для свойств
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(title).toBe("sjgfsdj");
    expect(lessons.length).toBe(5);

})

test('', ()=> {

// const l1 = props.lessons[0]
// const l2 = props.lessons[1]

    // const [l1, l2] = props.lessons
    // const [l1, ...restLessons] = props.lessons
    // const [,l2, ...restLessons] = props.lessons
    // const [, l2] = props.lessons
    const [,,l3] = props.lessons


    // expect(l1.title).toBe("1");
    // expect(l2.title).toBe("2");
    expect(l3.title).toBe("3");
    // expect(restLessons[0].title).toBe("2");
    // expect(restLessons.length).toBe(4);
    // expect(restLessons[0].toStrictEqual({title:"2"});
})