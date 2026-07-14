class Student {
    private firstName: string;
    private lastName: string;
    private year: number;

    constructor(firstName: string, lastName: string, year: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }

    printInfo(): void {
        console.log(`${this.firstName} ${this.lastName} is in year ${this.year}`);
        
    }
}
let student1 =  new Student('Svetlin', 'Garabedyan', 53);
student1.printInfo();