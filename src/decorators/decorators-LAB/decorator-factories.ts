class Name {
    constructor(private _name: string){}

    @format("Hello, my name is %s")
    getName(){
        return this._name;
    }
}

function format(stringFormat: string){
    return function(_target: Object, _key: string, descriptor: PropertyDescriptor){
        const original = descriptor.value;
        descriptor.value = function(...args: any[]){
            let value = original.call(this, ...args);
            return stringFormat.replace('%s', value);
        };
        return descriptor;
    }
}

let name1 = new Name('Svetlin');
console.log(name1.getName());
