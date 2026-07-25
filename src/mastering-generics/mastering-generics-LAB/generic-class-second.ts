// class Second<T>{
//     constructor(item: T) {
        
//     }
//     getItem(item: T) : T{
//         return this.item;
//     }

// }
// let itemInit = new Second();
// console.log(itemInit.getItem('Svetlin'));

function getItem<T>(item: T) : T{
        return item;
    }



console.log(getItem('Svetlin'));