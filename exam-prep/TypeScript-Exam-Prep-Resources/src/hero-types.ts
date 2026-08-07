import { Hero, HeroRole, Weapon, WithId } from "./models";

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
        return this.records.slice();
    }

}

export abstract class BaseHero implements Hero {
    id: number;
    name: string;
    level: number;
    role: HeroRole;

    public weapons: Weapon[] = [];
    abstract calculateStamina(): number;
    abstract attack(): number;

    constructor(id: number, name: string, level: number, role: HeroRole){
        this.id = id;
        this.name = name;
        this.level = level;
        this.role = role;
    }

    
}