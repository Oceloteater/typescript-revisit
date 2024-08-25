import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
        this.data = data.toLowerCase();
    }
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex: number, rightIndex: number): void {
        const characters: string[] = this.data.split('');
        const leftHand: string = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
}