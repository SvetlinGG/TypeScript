function convert(arr: unknown[]){

    let long: number = arr.join('').length;
     arr.push(long)
    return arr
}
convert(['How', 'are', 'you?'])