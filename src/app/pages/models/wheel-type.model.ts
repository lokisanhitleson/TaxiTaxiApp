export class WheelTypeOfVehicle {
    wheelTypeId: number;
    type: string;
}
export class WheelType {
    wheelTypeId: number;
    type: string;
    description: string;
    active: string;
    createdAt: string;
    updatedAt: string;
}
export class WheelTypeDetails {
    wheelTypeId: number;
    type: string;
    description: string;
    active: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
}