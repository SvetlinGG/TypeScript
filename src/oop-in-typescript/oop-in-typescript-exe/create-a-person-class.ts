export{}
class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce(): void {
        console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
        
    }
}

let person = new Person('John', 'Doe', 30);
person.introduce();