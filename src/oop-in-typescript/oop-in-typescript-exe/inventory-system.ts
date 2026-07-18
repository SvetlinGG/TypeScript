class Product {
        private static _productCount = 0;
        readonly id: number;
        private _name!: string;
        private _price!: number;

        constructor(name: string, price: number){
            this._name = name;
            this._price = price;
            this.id = ++Product._productCount;

        }

    

    get name(): string {
            return this._name;
        }
    set name(value: string){
        if (value.length > 1){
            return this._name = value;
        }else {
            throw new Error('Product name must be at least 2 characters long.')
        }
    }
}

class Inventory {
    private products: Product[];

    addProduct(product: Product): void {

    }

    listProducts(): string{

    }
}