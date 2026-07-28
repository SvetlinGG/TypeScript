export{}
function classDecorator(_constructor: Function){
    console.log('Decorated class');
    
}

// function methodDecorator(){
//     console.log('Decorated method');
    
// }
@classDecorator
class Person {
    firstName: string;
    lastName: string;


    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // @methodDecorator
    printInfo(showShortenedInfo: boolean): void{
        if(showShortenedInfo){
            console.log(this.firstName, this.lastName);
            
        }else{
            console.log(`Person's name is ${this.firstName} ${this.lastName}`);
            
        }
    }
}

let person = new Person('Svetlin', 'Garabedyan');
console.log(person);
