import { Sorter } from './Sorter';

class NodeItem {
    next: NodeItem | null = null;
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: NodeItem | null = null;

    get length(): number {
        if (!this.head) return 0;
        let length: number = 1;
        let node: NodeItem = this.head;
        while (node.next) {
            length++;
            node = node.next
        }
        return length;
    }

    add(data: number): void {
        const node: NodeItem = new NodeItem(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail: NodeItem = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }

    at(index: number): NodeItem {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter: number = 0;
        let node: NodeItem | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode: NodeItem = this.at(leftIndex);
        const rightNode: NodeItem = this.at(rightIndex);

        const leftHand: number = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) return;
        let node: NodeItem | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}