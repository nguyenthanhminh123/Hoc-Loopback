function log(title) {
    return function (target, key, descriptor) {
        console.log(target);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = original.apply(this, args);
            console.log("title: ".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned\n            ").concat(JSON.stringify(result)));
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
calculator.square(2);
calculator.square(3);