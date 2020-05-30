export class Place { 
    type: string;
    typeX: number;
    placeAddress: string;
    latitude: number;
    longitude: number;
    eLoc: string;
    entryLatitude: number;
    entryLongitude: number;
    placeName: string;
    alternateName: string;
    keywords: string[];
    addressTokens: { 
        houseNumber: string;
        houseName: string;
        poi: string;
        street: string;
        subSubLocality: string;
        subLocality: string;
        locality: string;
        village: string;
        subDistrict: string;
        district: string;
        city: string;
        state: string;
        pincode: string;
    };
    p: number;
    orderIndex: number; 
}