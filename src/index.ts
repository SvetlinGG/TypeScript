
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


let employee: {
    id: number,
    name: string, 
    age: number
} = { id: 1};





