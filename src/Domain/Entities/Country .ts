import { BaseEntity } from './BaseEntity';
export class Country extends BaseEntity{    
    Name: string | null | undefined;
    constructor(id: number, name: string | null | undefined) {
        super(id); 
        this.Name = name;
    }
}