import { CriticalStrike } from "./decorators";
import { Hero, HeroRole, Weapon, WithId } from "./models";

export class GuildStash<T extends WithId>{

    private records: T[] = [];

    public add(item: T): void{
        this.records.push(item);
    }

    public take(id: number): T | undefined{
        const index = this.records.findIndex(p => p.id === id);

        if ( index === -1){
            return undefined;

        }
        const removedItems = this.records.splice(index, 1);

        return removedItems[0];
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

export class Warrior extends BaseHero {

    constructor(
        id: number,
        name: string,
        level: number,
        public strength: number
    ){
        super(id, name, level, HeroRole.Warrior);
        this.strength = strength;
    }

    calculateStamina(): number {
        return (this.level * 10) + (this.strength * 5);
    }
    @CriticalStrike
    attack(): number {
        return this.strength * 2;
    }
}
export class Mage extends BaseHero {

    constructor(
        id: number,
        name: string,
        level: number,
        public mana: number
    ){
        super(id, name, level, HeroRole.Mage);
        this.mana = mana;
    }

    calculateStamina(): number{
        return (this.level * 5) + (this.mana *2);
    }

    attack(): number {
        return this.mana * 2;
    }
}

export class Archer extends BaseHero {

    constructor(
        id: number,
        name: string,
        level: number,
        public agility: number
    ){
        super(id, name, level, HeroRole.Archer);
        this.agility = agility;
    }

    calculateStamina(): number{
        return (this.level * 8) + (this.agility * 4)
    }

    attack(): number{
        return this.agility * 2;
    }
}