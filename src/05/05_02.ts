import type {GovBuilding, House} from '../02/02_02.ts';

export const getStreetsTitlesOfGovernmentBuildings = (buildings:GovBuilding[])=>{
    return buildings.map((b)=>b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses:House[])=>{
    return houses.map(house => house.address.street.title)
}

export const createMessages = (houses:House[])=>{
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}