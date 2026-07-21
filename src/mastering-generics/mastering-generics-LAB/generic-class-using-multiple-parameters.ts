export{}
class UserInput<F, S> {
    public first: F;
    public second: S;

    constructor(f: F, s: S){
        this.first = f;
        this.second = s;
    }

    showBoth(){
        return `First ${this.first}, second: ${this.second}`;
    }


}

let sample = new UserInput('Ten', 10);
let test = new UserInput(1, true);
console.log(sample.showBoth());
console.log(test.showBoth());
