function echo<T>(arg: T): T{
    console.log(typeof arg);

    return arg;
    
}
console.log(echo(1111));
console.log(echo('Hello'));