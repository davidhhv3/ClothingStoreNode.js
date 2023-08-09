import { Country } from "../Entities/Country ";

export interface IContryService{
    GetCountries():Promise<Country[]>;
    GetCountry(id: number):Promise<Country>;
    InsertCountry(country: Country):Promise<boolean>;
    UpdateCountry(country: Country):Promise<boolean>;
    DeleteCountry(id: number):Promise<boolean>;      
}