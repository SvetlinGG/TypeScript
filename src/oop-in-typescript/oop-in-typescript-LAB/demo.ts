class Student {
    protected firstName: string;
    protected lastName: string;
    protected year: number;

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

class GraduateStudent extends Student {
    private thesisTitle: string;

    constructor(firstName: string, lastName: string, year: number, thesisTitle: string){
        super(firstName, lastName, year);
        this.thesisTitle = thesisTitle;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Thesis: ${this.thesisTitle}`);
    }
}

let student2 = new GraduateStudent('Toni', 'Valentinova', 2, 'Phisics');
student2.printInfo();