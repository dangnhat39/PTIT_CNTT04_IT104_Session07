var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var myCircle = new Circle(5);
console.log("Hình tròn:");
console.log("Diện tích:", myCircle.calculateArea().toFixed(2));
console.log("Chu vi:", myCircle.calculatePerimeter().toFixed(2));
var myRectangle = new Rectangle(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", myRectangle.calculateArea());
console.log("Chu vi:", myRectangle.calculatePerimeter());
