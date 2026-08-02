function printMessage(text: string | string[]){

    console.log(text.length);

    if ( typeof text === 'string'){
        console.log(text);
        
    }else{
        console.log(text.join(' '));
        
    }
    
}
printMessage('Svetlin 54 Plovdiv');
printMessage(['Svetlin', '54', 'Plovdiv']);