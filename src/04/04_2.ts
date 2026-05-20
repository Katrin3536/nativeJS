import type {CityType, GovBuilding, House} from '../02/02_02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {

    return city.houses.filter(house => house.address.street.title === street);

};

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovBuilding[], number: number) => {

    return buildings.filter(building => building.staffCount > number);
};

export const getHousesOnTheStreet = (houses: Array<House>, street: string) => {
    return houses.filter(house => house.address.street.title === street);
}


