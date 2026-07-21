function fullName<T extends {fName: string} & {lName: string}>(obj: T) {
return `The full name is ${obj.fName} ${obj.lName}.`;
}
let output = fullName({fName: 'Svetoslv', lName: 'Dimitrov'});
console.log(output);