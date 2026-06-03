import type {UsersType} from './08_01.test.ts';

export const userArray = [{id: 234, name: "Dima"}, {id: 8476, name: "Natasha"}, {id: 34, name: "Valera"}, {id: 5, name: "Katya"}]

export const userObj = {
    "0": "Dima",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya",
}

export const users: UsersType= {
    "234": {id: 234, name: "Dima"},
    "8476": {id: 8476, name: "Natasha"},
    "34": {id: 34, name: "Valera"},
    "5": {id: 5, name: "Katya"}
}

let user = {id:2252, name: "Igor"}

users[user.id]= user