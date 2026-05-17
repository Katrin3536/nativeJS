import type {Student} from '../02/02.ts';
import type {CityType, GovBuilding, House} from '../02/02_02.ts';

export const student: Student = {
    id: 1,
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

export const addSkill = (student: Student, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill});
};

export const makeStudentActive = (st: Student) => {
    st.isActive = true;
};

export const doesStudentLiveIn = (st: Student, cityName: string) => {
    return st.address.city.title === cityName;
};

export const changeBudget = (building: GovBuilding, budget: number) => {
    building.budget = building.budget + budget;
};

export const repairHouse = (house: House) => {
    house.repaired = true;
};

export function toFireStaff(building: GovBuilding, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}


export function toHireStaff(building: GovBuilding, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}

export function createMessage(city:CityType){
    return "Hello " + city.title
}