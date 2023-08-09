import { CountryService } from "../Application/Services/ContryService";
import { CountryController } from "./controllers/CountryController";

const countryService = new CountryService();
const countryController = new CountryController(countryService);

export { countryController };