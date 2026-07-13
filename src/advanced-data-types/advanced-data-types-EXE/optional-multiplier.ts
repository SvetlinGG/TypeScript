function optionalMultiplier(
    param1?: string | number,
    param2?: string | number,
    param3?: string | number
) {

    console.log(Number(param1 || 1) * Number(param2 || 1) * Number(param3 || 1));
    

}

optionalMultiplier('3', 5, '10');
optionalMultiplier('2', '2');
optionalMultiplier(undefined, 2, 3);
optionalMultiplier(7, undefined, '2');
optionalMultiplier();