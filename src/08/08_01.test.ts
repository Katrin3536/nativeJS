import {expect, test, beforeEach} from 'vitest';

export type UsersType = {
[key: string]: {id: number, name: string};
}
let users: UsersType

beforeEach(()=>{
    users = {
        "234": {id: 234, name: "Dima"},
        "8476": {id: 8476, name: "Natasha"},
        "34": {id: 34, name: "Valera"},
        "5": {id: 5, name: "Katya"}
    }
})

test("should update corresponding user", () => {

   users['5'].name = "Ekaterina"
    expect(users["5"]).toEqual({id: 5, name: "Ekaterina"})
    expect(users["5"].name).toBe("Ekaterina")
})

test("should delete corresponding user", () => {

    delete users['34']
    expect(users["34"]).toBeUndefined()
})