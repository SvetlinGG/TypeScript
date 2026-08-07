export

class Point {
    constructor(public _x: number,public _y: number){
    }

    @double
    set x(value: number){
        this._x = value;
    }
    @double
    set y(value: number){
        this._y = value;
    }
}

function double(_target: any, _key: string, descriptor: PropertyDescriptor){
    let originalSet = descriptor.set;

    descriptor.set = function(val: any){
        originalSet?.call(this, val * 2);
    }
    return descriptor;
}
let p = new Point(20, 20);
p.x = 2;
p.y = 3;
console.log(p._x);
