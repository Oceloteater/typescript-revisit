interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
}

interface Reporter {
    summary(): string;
}

const oldCivic: Vehicle & Reporter = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `${this.name} ${this.year} ${this.broken}`;
    }
};

const drink = {
    colour: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This drink has ${this.sugar}g of sugar`
    }
};

const printSummary = (item: Reporter): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);