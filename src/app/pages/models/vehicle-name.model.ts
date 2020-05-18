export class VehicleNameWithBrand {
    vehicleNameId: number;
    vehicleBrandId: number;
    vehicleTypeId: number;
    name: string;
    airBag: string;
    safety: number;
    brandName: string;
}
export class VehicleName {
    vehicleNameId: number;
    vehicleBrandId: number;
    vehicleTypeId: number;
    name: string;
    description: string;
    airBag: string;
    safety: number;
    active: string;
    createdAt: string;
    updatedAt: string;
}
export class VehicleNameDetails {
    vehicleNameId: number;
    vehicleBrandId: number;
    vehicleTypeId: number;
    name: string;
    description: string;
    airBag: string;
    safety: number;
    active: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
}