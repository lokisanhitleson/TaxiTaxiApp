export class VehicleBrand {
    vehicleBrandId: number;
    brandName: string;
    description: string;
    logoUrl: string;
    active: string;
    createdAt: string;
    updatedAt: string;
}
export class VehicleBrandDetails {
    vehicleBrandId: number;
    brandName: string;
    description: string;
    logoUrl: string;
    active: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
}
export class BrandOfVehicleType {
    vehicleBrandId: number;
    brandName: string;
    logoUrl: string;
    popularity: string;
}
