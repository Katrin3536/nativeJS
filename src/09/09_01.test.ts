import {test, expect} from 'vitest';


type User = {
    name: string,
    age: number,
    address? : {title:string}
}

test('reference type test', () => {
    const user: User = {
        name: 'John',
        age: 35,
    };

    function increaseAge(user: User) {
        user.age++;
    }

    increaseAge(user);

    expect(user.age).toBe(36);

    const superUser = user;

    superUser.age = 1000;

    expect(user.age).toBe(1000);

    increaseAge(superUser);

    expect(user.age).toBe(1001);

});

test('array test', () => {
    const users: User[] = [{
        name: 'John',
        age: 35,
    },
        {
            name: 'lena',
            age: 40,
        },
    ];

    const admins = users

    admins.push({name: 'kolya', age: 10})

    expect(users[2].age).toBe(10);
  });

test('value type test', () => {
 const usersCount = 100;

 let adminsCount = usersCount;

    adminsCount = adminsCount +1

    expect(adminsCount).toBe(101);
});

test('reference type test', () => {
    const user: User = {
        name: 'John',
        age: 35,
        address : {
            title: "Minsk"
        }
    };

 const addr = user.address


    const user2:User = {
        name: 'Paul',
        age: 20,
        address : addr
    }

    user2.address.title = "Nicosia"

    expect(user.address?.title).toBe('Nicosia')
});

test('reference array test', () => {
    const address = {
        title: "Minsk"
    }

    const user: User = {
        name: 'John',
        age: 35,
        address : address
    };

    const user2:User = {
        name: 'Paul',
        age: 20,
        address :address
    }

    const usersS = [user, user2, { name: 'Kostya', age: 12, address: address }];

    const admins = [user, user2];

    admins[0].name = 'Oleg';

    expect(usersS[0].name).toBe('Oleg');
    expect(user.name).toBe('Oleg');
});

test('sort array test', () => {

    const letters = ['a', 'd', 'c'];

    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd']);
})