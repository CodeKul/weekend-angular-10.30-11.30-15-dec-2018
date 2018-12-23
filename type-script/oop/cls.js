"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(legs, eyes) {
        if (legs === void 0) { legs = 4; }
        if (eyes === void 0) { eyes = 2; }
        this.legs = legs;
        this.eyes = eyes;
    }
    Animal.prototype.run = function () {
        this.legs += 5;
        console.log(" Animal : speed is " + this.legs);
    };
    return Animal;
}());
exports.Animal = Animal;
