const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = age => age > 90;

const oldAges = [100];

export type CourseType = {
    title: string,
    price: number,
}

const courses: CourseType[] = [
    {title: 'JS', price: 100},
    {title: 'TS', price: 200},
    {title: 'CSS', price: 150},
];

const cheapCourses = (course: CourseType) => course.price < 160;


const cheep = [
    {title: 'CSS', price: 100},
    {title: 'CSS', price: 150},
]