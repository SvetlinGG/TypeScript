function unknownResponse(parameter: unknown): string{

    if ( parameter && typeof parameter === "object" && "value" in parameter && typeof parameter.value === 'string'){

        return parameter.value;
    }
    return '-';
}

console.log(unknownResponse( {code: 200, text: 'OK', value: [1, 2, 3]}));
console.log(unknownResponse( {code: 301, text: 'Moved Permanently', value: 'New URL'}));
console.log(unknownResponse( {code: 201, text: 'Created', value: 'Object Created'}));
