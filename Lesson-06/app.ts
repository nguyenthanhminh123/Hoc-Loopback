function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(['Hello kitti', 'World']);

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello kitti', 'World']);

console.log(myNumArr);
console.log(myStrArr);

// myNumArr.push('Helowr'); complier error
// myStrArr.push(1);