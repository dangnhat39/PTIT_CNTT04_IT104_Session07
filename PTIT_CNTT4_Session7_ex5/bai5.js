var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        if (speed === void 0) { speed = 0; }
        this.speed = speed;
    }
    Vehicle.prototype.speedUp = function (amount) {
        this.speed += amount;
        console.log("T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    Vehicle.prototype.slowDown = function (amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log("T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log("Ph\u01B0\u01A1ng ti\u1EC7n \u0111\u00E3 d\u1EEBng. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var myVehicle = new Vehicle();
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
