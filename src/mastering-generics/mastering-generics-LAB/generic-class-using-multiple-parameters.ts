export{}
class UserInput<F, S> {
    public first: F;
    public second: S;

    constructor(f: F, s: S){
        this.first = f;
        this.second = s;
    }

    showBoth(){
        return `First ${this.first}, second: ${this.second}