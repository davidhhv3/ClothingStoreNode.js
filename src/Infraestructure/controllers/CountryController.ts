import { Request, Response } from 'express';

export class CountryController{

    async HolaMundo(req:Request,res:Response){
        res.status(200).send();
    }
}