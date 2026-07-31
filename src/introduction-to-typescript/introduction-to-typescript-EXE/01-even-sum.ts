function evenSum(a: number, b: number, c: number){
    let sum: number = a + b + c;
    if ( sum % 2 === 0) {
        return true
    }else {
        return false;
    }
}
evenSum(1, 2, 3);
evenSum(2, 2, 3);