import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: parseFloat(String(faker.location.latitude())),
            lng: parseFloat(String(faker.location.longitude()))
        }
    }
    markerContent(): string {
        return `
            <div>
                <h1>User: ${this.name}</h1> 
                <p>Location: ${this.location.lat}, ${this.location.lng}</p>
                <h3>Well, hello there</h3>
            </div>`;
    }
}