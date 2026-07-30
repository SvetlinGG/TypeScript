function calculate(a: number, b: number, c: number){
    
    let sum: number = a + b + c;
    if ( sum % 2 === 0){
        return true;
    }else{
        return false;
    }
}
calculate(1, 2, 3);
calculate(2, 2, 3);