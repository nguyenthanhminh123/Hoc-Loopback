function log(target, key, descriptor){
    console.log(target)
    const original = descriptor.value
    descriptor.value = function(...args: any[]){
        const result = original.apply(this, args)
        console.log(`${key} with args ${JSON.stringify(args)} returned
        ${JSON.stringify(result)}`)
        return result
    }
    return descriptor
}

class Calculator {
    @log 
    square(n: number){
        return n * n
    }
}

const calculator = new Calculator()
calculator.square(2)
calculator.square(3)