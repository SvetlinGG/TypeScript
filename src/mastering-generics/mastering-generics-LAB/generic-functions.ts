
const takeLast = <T>(array: T[]): T | undefined => {
    return array.pop();
}

const simple = takeLast(['Hello', 'World', 'TypeScript'])
const secondSimple = takeLast([1, 2, 3, 4]);
console.log(simple, secondSimple);
