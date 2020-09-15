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
//   VehicleNameDetails: {
//     vehicleName: string;
//     vehicleNameId: number;
//     vehicleBrandId: number;
//     vehicleTypeId: number;
//     name: string;
//     description: string;
//     airBag: string;
//     safety: number;
//     active: string;
//     createdAt: string;
//     updatedAt: string;
//     createdBy: number;
//     updatedBy: number;
// }
// InsuranceDetails: {
//   agencyVehicleId: number;
//   insuranceNo: string;
//   expiryDate: string;
//   insuranceTypeId: number;
//   insuranceCompanyId: number;
//   startDate: string;
//   attachmentUrl: string;
// }
// VehicleBrand: {
//   vehicleBrandId: number;
//   brandName: string;
//   description: string;
//   logoUrl: string;
//   active: string;
//   createdAt: string;
//   updatedAt: string;
// }
vehicleName:any;
airBag:any;
brandName : any;
vehicleType : any;
vehicleColor: any;
vehicleVariant: any;
fuelType : any;
wheelType: any;
brakingSystem : any;
vehicleCondition: any;
insuranceCompany: any;
insuranceType : any;
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
  registrationNo: number;
  insuranceNo:number;
  expiryDate:number;
  insuranceTypeId:number;
  insuranceCompanyId:number;
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
export class AgencyVehicleSelect {
  agencyVehicleId: number;
  vehicleName: string;
  brandName: string;
}
