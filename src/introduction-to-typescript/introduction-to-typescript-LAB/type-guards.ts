function createRandomVariable(): unknown{
    return Math.random();
}

function isString(val: unknown): val is string{
    return (val as string).charAt != undefined;
}
let myVal: unknown = createRandomVariable();
console.log(myVal.length); // error
console.log(myVal * 2); // error

