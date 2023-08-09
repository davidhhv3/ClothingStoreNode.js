import { Country } from "../../Domain/Entities/Country ";
import { IContryService } from "../../Domain/Interfaces/IContryService";

export class CountryService implements IContryService{

    async GetCountry(id: number):Promise<Country>  {
        const country : Country = new Country(1, "Country 1");
        return country;
    }
    async InsertCountry(country: Country):Promise<boolean>{        
        return true;
    }
    async UpdateCountry(country: Country):Promise<boolean> {
        return true;
    }
    async DeleteCountry(id: number):Promise<boolean> {
        return true;
    }

    async GetCountries():Promise<Country[]> {
        const countries: Country[] = [
            new Country(1, "Country 1"),
            new Country(2, "Country 2"),
            new Country(3, "Country 3")          
        ];
        return countries;      
    }
}