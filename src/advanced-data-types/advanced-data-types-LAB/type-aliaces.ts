type User = {
    firstName: string;
    lastName: string;
    email: string;
}

const user1: User = {
    firstName: 'Svetlin',
    lastName: 'Garabedyan',
    email: 'svetlinb@gmail.com'
}

const user2: User = {
    firstName: 'Toni',
    lastName: 'Valentinova',
    email: 'toni@abv.bg'
}

type Address = {
    country: string;
    city?: string;
}

const address1: Address = {
    country: 'Bulgaria',
    city: 'Sofia'
}

const address2: Address = {
    country: 'Bulgaria',
    city: 'Burgas'
}