function LoggerAndReturn(thing) {
    return thing;
}
//const message: string = LoggerAndReturn<string>('Hello Minh');
var message = LoggerAndReturn('Hello Minh');
var message2 = LoggerAndReturn(123);
console.log(message);
console.log(message2);
