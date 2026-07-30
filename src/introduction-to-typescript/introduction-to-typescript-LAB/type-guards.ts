function createRandomVariable(): unknown{
    return Math.random();
}

function isString(val: unknown): val is string{
    return (val as string).charAt != undefined;
}