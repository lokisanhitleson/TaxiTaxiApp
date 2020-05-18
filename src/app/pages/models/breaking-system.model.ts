export class BreakingSystemOfVehicle {
    breakingSystemId: number;
    name: string;
}
export class BreakingSystem {
    breakingSystemId: number;
    name: string;
    description: string;
    active: string;
    createdAt: string;
    updatedAt: string;
}
export class BreakingSystemDetails {
    breakingSystemId: number;
    name: string;
    description: string;
    active: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
}