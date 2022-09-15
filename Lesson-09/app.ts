// Interfaces describing Object properties
interface Pair<T, U> {
    first: T;
    second: U; 
}

let p: Pair<string, number> = {first: '10k', second:1000};
console.log(p)

const person: Pair<string, string> = { first: 'Jane', second: 'Malik'};
console.log(person);