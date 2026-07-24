
interface CountableSet<T>{
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number
};

class CountedSet<T> implements CountableSet<T> {
    private map: Map<T, number> = new Map<T, number>();

    add(item: T): void {
        
        const currentCount = this.map.get(item);

        if (currentCount){
            this.map.set(item, currentCount + 1);
        }else{
            this.map.set(item, 1);
        }
    }
}