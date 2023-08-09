import { Request, Response } from 'express';
import { IContryService } from '../../Domain/Interfaces/IContryService';
import { Country } from '../../Domain/Entities/Country ';


export class CountryController{
    private readonly countryService: IContryService;  

    constructor(countryService: IContryService) {
        this.countryService = countryService;
    }

    async GetCountries(req: Request, res: Response){
        const countries:Country[] = await this.countryService.GetCountries();
        res.status(200).send(countries); 
    }

    async GetCountry(req: Request, res: Response){
        const id:number = parseInt(req.params.id); 
        const country:Country =await  this.countryService.GetCountry(id);
        res.status(200).send(country); 
    }

    async CreateCountry(req: Request, res: Response){       
        const response:boolean = await this.countryService.InsertCountry(req.body);
        res.status(200).send(response);
    }

    async UpdateCountry(req: Request, res: Response){
        const id:number = parseInt(req.params.id); 
        const response:boolean = await this.countryService.UpdateCountry(req.body);
        res.status(200).send(response);
    }

    async DeleteCountry(req: Request, res: Response){
        const id:number = parseInt(req.params.id);       
        const response:boolean = await this.countryService.DeleteCountry(id);
        res.status(200).send(response);
    }
}