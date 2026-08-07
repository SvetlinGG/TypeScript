export

function classDecorator(constructor: Function){
    console.log('Decorated class');
    
}
@classDecorator
class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printInfo(showShortenedInfo: boolean): void{
        if(showShortenedInfo){
            console.log(this.firstName, this.lastName);
            
        }else{
            console.log(`Person's name is ${this.firstName} ${this.lastName}`);
            
        }
    }
}