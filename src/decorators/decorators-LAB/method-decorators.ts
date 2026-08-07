class Num {
    constructor(private _number: number) { }
    @add10 
    getNumber() { 
        return this._number; 
    }
}
function add10(_target: Object, _key: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...arg: any[]){
        let result = originalMethod.call(this, arg);
        result += 10;
        return result;
    }

    return descriptor;
};
let num = new Num(20);
console.log(num.getNumber()); 