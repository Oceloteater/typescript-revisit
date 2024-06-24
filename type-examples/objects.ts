const profile = {
    names: 'Adam',
    age: 35,
    coords: {
        lat: 15,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}
const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;