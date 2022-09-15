// Interfaces describing Object properties
interface Pair<T, U> {
    first: T;
    second: U; 
}

let p: Pair<string, number> = {first: '10k', second:1000};
console.log(p)

const person: Pair<string, string> = { first: 'Jane', second: 'Malik'};
//console.log(person);

interface Command<T, R> {
    id: T;
    run(): R;
}

let c: Command<string, number> = {
    id: '123thanhminh',
    run: function() {
        return 3;
    },
};

console.log(c.id);
console.log(c.run());
