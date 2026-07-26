
// const takeLast = <T>(array: T[]): T | undefined => {
//     return array.pop();
// }

// const simple = takeLast(['Hello', 'World', 'TypeScript'])
// const secondSimple = takeLast([1, 2, 3, 4]);
// console.log(simple, secondSimple);


const makeTupple = <T, V>(a: T, b: V): [T, V] => {
    return [a, b]
}

const firstTupple = makeTupple(1, 'a')
const secondTupple = makeTupple('b', '3');
console.log(firstTupple, secondTupple);

