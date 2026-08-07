export
@addTitle 
class Person { constructor(public name: string){} }

function addTitle<T extends new(...args: any[]) => {}>(constructor: T){
    return class extends constructor {
        constructor(...args: any[]){
            super('Sir/Madam ' + args[0], ...args.slice(1))
        }
    }
}

let person = new Person('George');
console.log(person.name);
