type StringOrNumber<T> = T extends number ? number : string

function conditionalNumber<T>(arg: StringOrNumber<T>){

    if (typeof arg === 'number'){
        return arg.toFixed(2);
    }else{
        return arg;
}
}
console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>('wow'));
console.log(conditionalNumber<boolean>('a string'));



// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');