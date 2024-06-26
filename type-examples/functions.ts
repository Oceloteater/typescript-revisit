const add = (a: number, b:  number) => {
    return a + b;
}
function divide(a: number, b: number): number {
    return a / b;
}
const multiple = function(a: number, b: number): number {
    return a * b;
}
const logger = (message: string): void => {
    console.log(message);
}
const throwError = (message: string): Error => {
    throw new Error(message);
}
const forecast = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log('weather', weather, 'date', date);
}
logWeather(forecast);