"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
class HelloController {
    hello() {
        return 'Hello from Loopback 4';
    }
}
tslib_1.__decorate([
    get('hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], HelloController.prototype, "hello", null);
exports.HelloController = HelloController;
//# sourceMappingURL=hello.controller.js.map