export class AgencyVehicle {
  agencyVehicleId: number;
  agencyId: number;
  vehicleNameId: number;
  displayImage: string;
  vehicleName: string;
  brandName: string;
  vehicleType: string;
  registrationNo: string;
  active: string;
  createdAt: string;
  updatedAt: string;
}
export class AgencyVehicleDetails {
  agencyVehicleId: number;
  agencyId: number;
  vehicleNameId: number;
  vehicleColorId: number;
  fuelTypeId: number;
  vehicleVariantId: number;
  wheelTypeId: number;
  brakingSystemId: number;
  chassisNo: string;
  manufactureYear: number;
  vehicleConditionId: number;
  accidentHistory: string;
  registrationNo: string;
  fcYear: number;
  displayImage: string;
  frontImage: string;
  backImage: string;
  leftImage: string;
  rightImage: string;
  active: string;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  createdByRole: string;
  updatedBy: number;
  updatedByRole: string;
}

export class AvailableVehicle {
  active: string;
  agencyId: number;
  agencyName: string;
  agencyVehicleId: number;
  brandName: string;
  createdAt: string;
  displayImage: string;
  distance: number;
  fuelType: string;
  latitude: number;
  longitude: number;
  mobileNo: string;
  region: string;
  registrationNo: string;
  updatedAt: string;
  vehicleName: string;
  vehicleNameId: number;
  vehicleType: string;
}
export class AvailableVehicleDetails {
  agencyId: number;
  vehicleNameId: number;
  vehicleColorId: number;
  fuelTypeId: number;
  vehicleVariantId: number;
  wheelTypeId: number;
  brakingSystemId: number;
  manufactureYear: number;
  vehicleConditionId: number;
  accidentHistory: string;
  registrationNo: string;
  fcYear: number;
  displayImage: string;
  frontImage: string;
  backImage: string;
  leftImage: string;
  rightImage: string;
}
export class AvailableAgencyDetails {
  agencyName: string;
  agencyRegion: string;
  establishmentYear: string;
  agencyLogoUrl: string;
  mobileNo: string;
  email: string;
  firstName: string;
}
