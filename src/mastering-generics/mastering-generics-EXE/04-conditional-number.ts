function conditionalNumber<T>(param: T){
    if(typeof param === 'number'){
        return param.toFixed(2)
    }else{
        return param

    }
}



console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>('wow'));
//console.log(conditionalNumber<boolean>('a string'));



// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');