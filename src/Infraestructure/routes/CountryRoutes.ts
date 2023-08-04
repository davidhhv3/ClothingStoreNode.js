import express from "express";
import { countryController } from "../Dependencies";


const coutryRouter = express.Router();

coutryRouter.get('',countryController.HolaMundo);

export {coutryRouter};
export const a = "Funcionaxxx";