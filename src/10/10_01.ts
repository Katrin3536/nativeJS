export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
};

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType;
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserType & {
    companies: Array<{id: number, title:string}>
}


export function hairDresser(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power};
    return copy;
}

export function moveUser(u: UserWithLaptop, title: string) {
    const copy = {...u, address: {...u.address, city: title}};
    return copy;
}

export function upgrateUserLaptop(u: UserWithLaptop, title: string) {
    const copy = {...u, laptop: {...u.laptop, title: title}};
    return copy;
}

export function moveUsertoOtherHouse(u: UserWithLaptop & UserWithBooksType, house: number) {
    const copy = {...u, address: {...u.address, house: house}};
    return copy;
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType, userBook: string, newBook: string) {
    return {...u, books: u.books.map(b => b === userBook ? newBook : b)};
}

export function updateBooksToUser(u: UserWithLaptop & UserWithBooksType, userBook:Array<string>) {
    return {...u, books: [...u.books].concat(userBook)};
}



export function removeBooks(u: UserWithLaptop & UserWithBooksType, book: string) {
    return {...u, books: u.books.filter(b => b !== book)};
}

export function updateCompanyTitle(u: UserWithCompaniesType, id: number, title: string) {
    return {...u, companies: u.companies.map(company=>company.id === id? ({...company, title: title}): company)
}}

export function updateCompanyTitle2(companyId: number, companies: {[key:string]:Array<{id:number, title:string}>}, userName: string, newTitle: string) {
    const copyCompanies = {...companies}

   copyCompanies[userName]= copyCompanies[userName].map(company => company.id === companyId ? {...company, title: newTitle} : company)

return copyCompanies
}


