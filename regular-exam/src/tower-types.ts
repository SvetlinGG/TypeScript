import { Upgraded } from "./decorators";
import { Enemy, Tower, TowerType, WithId } from "./models";


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

export abstract class BaseTower implements Tower {

    id: number;
    name: string;
    level: number;
    type: TowerType

    public targets: Enemy[] = []

    constructor(
        id: number,
        name: string,
        level: number,
        type: TowerType
    ){
        this.id = id;
        this.name = name;
        this.level = level;
        this.type = type;
    }

    abstract calculateRange(): number;
    
    abstract attack(): number;

}

export class CannonTower extends BaseTower {
    constructor(
        id: number,
        name: string,
        level: number,
        public power: number
    ){
        super(id, name, level, TowerType.Cannon);
    }

    calculateRange(): number{
        return this.level * 3 + this.power * 2;
    }
    @Upgraded
    attack(): number{
        return this.power * 3;
    }
}

export class MagicTower extends BaseTower {

    constructor(
        id: number,
        name: string,
        level: number,
        public spellPower: number
    ){
        super(id, name, level, TowerType.Magic);
    }

    public calculateRange(): number{
        return this.level * 5 + this.spellPower * 1;
    }
    
    public attack(): number{
        return this.spellPower * 4;
    }
}

export class IceTower extends BaseTower {

    constructor(
        id: number,
        name: string,
        level: number,
        public freeze: number
    ){
        super(id, name, level, TowerType.Ice);
    }

    public calculateRange(): number {
        return this.level * 4 + this.freeze * 3;
    }
    
    public attack(): number {
        return this.freeze * 2;
    }
}
