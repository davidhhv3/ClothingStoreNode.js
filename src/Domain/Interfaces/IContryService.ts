import { Country } from "../Entities/Country ";

export interface IContryService{
    GetCountries(): Country[];
    GetCountry(id: number): Country;
    InsertCountry(country: Country): boolean;
    UpdateCountry(country: Country): boolean;
    DeleteCountry(id: number): boolean;      
}