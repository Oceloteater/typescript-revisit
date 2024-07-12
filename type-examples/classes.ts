class Vehicle {
    constructor(public colour: string) {}

    protected honk(): void {
        console.log('beep beep');
    }
}
class Car extends Vehicle {
    constructor(public wheels: number, colour: string) {
        super(colour);
    }
    drive(): void {
        console.log('vroom vroom');
    }
    startDriving(): void {
        this.drive();
        this.honk();
    }
}
const vehicle = new Vehicle('black');
console.log(vehicle.colour);

const car: Car = new Car(4, 'red');
car.drive();
car.startDriving();
console.log(car.colour);

