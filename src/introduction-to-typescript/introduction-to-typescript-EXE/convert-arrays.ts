function convert(arr: unknown[]){

    //let long: number = arr.length;
    //arr.join('')
    let newArr: string = arr.join('');
    let long: number = newArr.length
    
    console.log([newArr, long]);
    
    
}
convert(['How', 'are', 'you?']);
convert(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']);