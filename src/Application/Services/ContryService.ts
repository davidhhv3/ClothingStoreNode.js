import { Country } from "../../Domain/Entities/Country ";
import { IContryService } from "../../Domain/Interfaces/IContryService";

export class CountryService implements IContryService{

    GetCountry(id: number): Country {
        const country : Country = new Country(1, "Country 1");
        return country;
    }
    InsertCountry(country: Country): boolean {        
        return true;
    }
    UpdateCountry(country: Country): boolean {
        return true;
    }
    DeleteCountry(id: number): boolean {
        return true;
    }

    GetCountries(): Country[] {
        const countries: Country[] = [
            new Country(1, "Country 1"),
            new Country(2, "Country 2"),
            new Country(3, "Country 3")          
        ];
        return countries;      
    }

}