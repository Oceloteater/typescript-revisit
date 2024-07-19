import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(String(faker.location.latitude())),
            lng: parseFloat(String(faker.location.longitude()))
        }
    }
    markerContent(): string {
        return `
            <div>
                <h1>Company: ${this.companyName}</h1> 
                <p>Location: ${this.location.lat}, ${this.location.lng}</p>
                <h3>${this.catchPhrase}</h3>
            </div>`;
    }
}