export type Student = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: Address;
    technologies:Technology[]
}

type Address = {
    streetTitle: string;
    city: City
}

type City = {
    title: string;
    countryTitle: string;
}
 type Technology ={
    id: number;
    title: string;
}

export const student: Student= {
    id:1,
    name: 'Dim',
    age: 25,
    isActive: true,
    address: {
        streetTitle: 'Bobrova,3',
        city: {
            title: 'Slonim',
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

