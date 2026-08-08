import { WithId } from "./models";


export class BuildQueue<T extends WithId> {
    slots: T[] = [];

    public enqueue(item: T): void {
        this.slots.push(item);
    }

    public dequeue(id: number): T | undefined{
        const index = this.slots.findIndex(item => item.id === id);

        if (index === -1){
            return undefined;
        }
        const [removedItem] = this.slots.splice(index, 1);
        return removedItem;
    }

    public getAll(): T[]{
        return [...this.slots]
    }
}

