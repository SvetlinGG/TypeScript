interface GenericConstructor<T, V> {
(arg: T, param: V): [T, V];
}
const generatedFn: GenericConstructor<string, string> = <T, V>(arg: T, param: V) => {
return [arg, param];
}
const sample = generatedFn('Hello', 'World');
console.log(sample); // [Hello, World]