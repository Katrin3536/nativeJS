export type CityType = {
    title: string
    houses: House[],
    governmentBuildings: GovBuilding[],
    citizensNumber: number
}

export type House = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovBuilding ={
    type: "HOSPITAL" | "FIRE-STATION"
    budget:number
    staffCount:number
    address: AddressType
}