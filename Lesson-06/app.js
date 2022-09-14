function getArray(items) {
    return new Array().concat(items);
}
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(['Hello kitti', 'World']);
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello kitti', 'World']);
console.log(myNumArr);
console.log(myStrArr);
// myNumArr.push('Helowr'); complier error
// myStrArr.push(1);
