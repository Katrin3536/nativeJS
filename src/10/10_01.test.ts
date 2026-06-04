import {test, expect} from 'vitest';
import {
    addNewBooksToUser,
    hairDresser,
    moveUser, moveUsertoOtherHouse, removeBooks, updateBooksToUser, updateCompanyTitle, updateCompanyTitle2,
    upgrateUserLaptop,
    type UserType,
    type UserWithBooksType, type UserWithCompaniesType,
    type UserWithLaptop
} from './10_01.ts';



test("Reference type test", () => {
    const user: UserType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk" },
    };

   const newUser= hairDresser(user,2);

    expect(user.hair).toBe(22);
    expect(newUser.hair).toBe(11);
});

test("Change address type test", () => {
    const user: UserWithLaptop = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        }
    };

    const newUser:UserWithLaptop= moveUser(user,"Larnaca");

    expect(user).not.toBe(newUser);
    expect(user.address).not.toBe(newUser.address);
    expect(newUser.address.city).toBe("Larnaca");
    expect(newUser.laptop).toBe(user.laptop);

});

test("upgrade laptop to MacBook", () => {
    const user: UserWithLaptop = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        }
    };

    const newUser:UserWithLaptop= upgrateUserLaptop(user,"MacBook");

    expect(user).not.toBe(newUser);
    expect(user.address).toBe(newUser.address);
    expect(newUser.laptop.title).toBe("MacBook");
    expect(newUser.laptop).not.toBe(user.laptop);


});


test("upgrade laptop to MacBook", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
        books: ['JS', "TS", "CSS"]
    };

    const newUser:UserWithLaptop & UserWithBooksType= moveUsertoOtherHouse(user,18);

    expect(user).not.toBe(newUser);
    expect(user.books).toBe(newUser.books);
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).not.toBe(user.address);
    expect(newUser.address.house).toBe(18);


});

test("add new books to user", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
        books: ['JS', "TS", "CSS"]
    };

    const newUser:UserWithLaptop & UserWithBooksType= updateBooksToUser(user,["React", "Rest API"]);

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.books[3]).toBe("React");
    expect(newUser.books.length).toBe(5);


});

test("update books to user", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
        books: ['JS', "TS", "CSS"]
    };

    const newUser:UserWithLaptop & UserWithBooksType= addNewBooksToUser(user, "CSS", "React");

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.books[2]).toBe("React");
    expect(newUser.books.length).toBe(3);

});

test("remove js book", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
        books: ['JS', "TS", "CSS"]
    };

    const newUser:UserWithLaptop & UserWithBooksType= removeBooks(user, "JS");

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.books[0]).toBe("TS");
    expect(newUser.books.length).toBe(2);

});

test("update name company", () => {
    const user: UserWithLaptop & UserWithCompaniesType = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
        companies: [{id:1, title:"Epam"},{id:2, title: "ITTrantition"}]
    };

    const newUser= updateCompanyTitle(user, 1, "EPAM") as UserWithLaptop & UserWithCompaniesType

    expect(user).not.toBe(newUser);
    expect(user.companies).not.toBe(newUser.companies);
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.companies[0].title).toBe("EPAM");

});

test("update company", () => {
    const user: UserWithLaptop = {
        name: "Daniil",
        hair: 22,
        address: { city: "Minsk", house: 12 },
        laptop:{
            title: "Lenovo"
        },
    };

    const companies:{ [key: string]: Array<{ id: number, title: string }> } = {
        ['Kate']: [{id:1, title:"Epam"},{id:2, title: "ITTrantition"}],
        ['Kolya'] : [{id:1, title:"IT"},{id:2, title: "Trans"}]
    }



const newCompany: { [key: string]: Array<{ id: number, title: string }> } = updateCompanyTitle2(1,companies,'Kate', "RRR")



    expect(newCompany).not.toBe(companies);
    expect(newCompany['Kate'][0].title).toBe("RRR");
    expect(newCompany['Kate']).not.toBe(companies['Kate']);

});