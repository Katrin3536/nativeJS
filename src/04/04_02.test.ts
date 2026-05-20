import {test, expect, beforeEach} from 'vitest';
import type {CityType} from '../02/02_02.ts';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from './04_2.ts';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White Street'
                    }
                }

            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy Street'
                    }
                }

            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy Street'
                    }
                }

            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 400000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    };
})
;


test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
});

test.skip('list of streets titles of houses', () => {
    const happyHouses = getHousesOnTheStreet(city.houses, 'Happy street');
    const whiteHouses = getHousesOnTheStreet(city.houses, 'White street');

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
});

test('buildings with correct staff count', () => {
    const buildings =
        getBuildingsWithStaffCountGreaterThen(
            city.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});
