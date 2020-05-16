export class FuelTypeOfVehicle {
    fuelTypeId: number;
    type: string;
}
export class FuelType {
    fuelTypeId: number;
    type: string;
    active: string;
    createdAt: string;
    updatedAt: string;
}
export class FuelTypeDetails {
    fuelTypeId: number;
    type: string;
    active: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
}