interface ShowEnum<T> {
    returnPair(): [string, T | number];
}

class EnumOption<T> implements ShowEnum<T> {
    public key: string;
    public value: T | number;
    static counter = 0;

    constructor(k: string, v: T) {
        this.key = k;
        this.value = v ?? EnumOption.counter++;
    }

    returnPair(): [string, number | T] {
        return [this.key, this.value];
    }


}
let test: ShowEnum<string> = new EnumOption('January', 'jan');
console.log(test.returnPair());

let test2: ShowEnum<number | undefined> = new EnumOption('January', undefined);
console.log(test2.returnPair());

let test3: ShowEnum<number | undefined> = new EnumOption('February', 2);
console.log(test3.returnPair());


