class Collection<T> {
    public data: T[];
    constructor(...elements: T[]){
        this.data = elements;
    }

    addEle