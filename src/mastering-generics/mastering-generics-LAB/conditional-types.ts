// type hasAge
// - accepts generic type T
// - hasAge will be 'yes' if T has prop age: number
// - hasAge will be 'no' if T DOESNT have prop age

type hasAge<T> = T extends { age: number } ? 'yes' : 'no';
type validAge = hasAge<{ name: string; age: number }>
type invalidAge = hasAge<'pencho'>