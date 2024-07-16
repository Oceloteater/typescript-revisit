import { faker } from '@faker-js/faker';

export class User {
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
}