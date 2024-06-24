let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();
let colours: string[] = ['red', 'blue', 'green'];
let numbers: number[] = [1,2,3,4,5];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number, y: number } = { x: 10, y: 20 };
const logNumber: (i: number) => void = (i) => { console.log(i) };

const json = '{ "x": 10, "y": 20 }';
const coords: { x: number, y: number } = JSON.parse(json);

let words: string[] = ['red', 'blue', 'green'];
let foundWord: boolean = false;

words.forEach((word): void => {
    if (word === 'green') foundWord = true;
});

let moreNumbers = [-1,-2,3,4,5];
let numAboveZero: boolean | number = false;

moreNumbers.forEach(number => {
    if (number > 0) numAboveZero = number;
});