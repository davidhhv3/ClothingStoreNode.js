import express from "express";
import { countryController } from "../Dependencies";

const coutryRouter = express.Router();

coutryRouter.get('/countries', countryController.GetCountries.bind(countryController));
coutryRouter.get('/country/:id', countryController.GetCountry.bind(countryController));
coutryRouter.post('/country', countryController.CreateCountry.bind(countryController));
coutryRouter.put('/country/:id', countryController.UpdateCountry.bind(countryController));
coutryRouter.delete('/country/:id', countryController.DeleteCountry.bind(countryController));
export {coutryRouter};
