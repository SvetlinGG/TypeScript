class Collection<T> {
    public data: T[];
    constructor(...elements: T[]){
        this.data = elements;
    }

    addElement(el: T){
        this.data.push(el);
    }

    removeElemet(el: T){
        let index = this.data.indexOf(el);

        if( index > -1){
            this.data.splice(index, 1);
        }
    }

    reverseElements(){
        return this.data.reverse();
    }

    showElements(){
        return this.data;
    }
}