
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

    remove(item: T): void {
        const currentCounter = this.map.get(item);

        if (currentCounter && currentCounter > 0){
            this.map.set(item, currentCounter -1)
        }
    }

    contains(item: T): boolean{
        const currentCounter = this.map.get(item);

        if(currentCounter && currentCounter > 0){
            return true;
        }else{
            return false;
        }
    }

    getNumberOfCopies(item: T): number{
        const currentCounter = this.map.get(item);

        if(currentCounter){
            return currentCounter;
        }else{
            return 0;
        }
    }
}

// let countedSet = new CountedSet<string>();
// countedSet.add("test");
// countedSet.add("test");
// console.log(countedSet.contains("test"));
// console.log(countedSet.getNumberOfCopies("test"));
// countedSet.remove("test");
// countedSet.remove("test");
// countedSet.remove("test");
// console.log(countedSet.getNumberOfCopies("test"));
// console.log(countedSet.contains("test"));

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));