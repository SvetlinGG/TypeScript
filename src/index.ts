
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

function render(document: string){
    console.log(document);
    
}

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach( n => n.valueOf);

// 1, 'Mosh'

let user: [number, string] = [1, 'Mosh'];
user.push(1)
console.log(user);


// const small = 1;
// const medium = 2;
// const large = 3;
// pascal case

enum Size {Small = 10, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number): number{
    if ( taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000, 2022);

// work with Objects
// Don't repeat yourself - DRY

type Employee = {
    readonly  id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1,
    name: 'Svetlin',
    retire: (date: Date) => {
        console.log(date);
        
    }
};

console.log(employee);

// Union Types

function kgToLbs(weight: number | string){
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2;

}
kgToLbs(100);
kgToLbs('10');

// Intersection Types

type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types

function greet(name: string | null){

    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
        

}
greet(null)





