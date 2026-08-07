import { WithId } from "./models";

export class GuildStash<T extends WithId>{

    private records: T[] = [];

    public add(item: T): void{
        this.records.push(item);
    }

    public take(id: number): T | undefined{
        if (this.records.find(x => x.id === id) !== undefined){
            return this.records.find(x => x.id === id);
        }
    }

    public getAll(): T[]{
        return this.records;
    }

}