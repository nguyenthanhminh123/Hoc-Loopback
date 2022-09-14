function LoggerAndReturn<T>(thing: T): T {
    return thing;
}

//const message: string = LoggerAndReturn<string>('Hello Minh');
const message: string = LoggerAndReturn('Hello Minh');
const message2: number = LoggerAndReturn(123);

console.log(message);
console.log(message2);