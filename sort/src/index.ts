import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection: NumbersCollection = new NumbersCollection([10, 3, -5, 0, 34, -102]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection: CharactersCollection = new CharactersCollection('kjakenKkjaraXsdrGsdrv');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(23);
linkedList.add(-1);
linkedList.sort();
linkedList.print();