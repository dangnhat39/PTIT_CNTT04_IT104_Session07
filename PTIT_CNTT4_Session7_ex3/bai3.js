var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    // Method thông thường
    Job.prototype.printType = function () {
        console.log("Lo\u1EA1i c\u00F4ng vi\u1EC7c: ".concat(this.type));
    };
    return Job;
}());
var ParttimeJob = /** @class */ (function (_super) {
    __extends(ParttimeJob, _super);
    function ParttimeJob(type, workingHour) {
        var _this = _super.call(this, type) || this;
        _this.workingHour = workingHour;
        return _this;
    }
    // Bắt buộc implement abstract method
    ParttimeJob.prototype.calculateSalary = function () {
        return 30000 * this.workingHour;
    };
    return ParttimeJob;
}(Job));
var FulltimeJob = /** @class */ (function (_super) {
    __extends(FulltimeJob, _super);
    function FulltimeJob(type) {
        return _super.call(this, type) || this;
    }
    FulltimeJob.prototype.calculateSalary = function () {
        return 10000000;
    };
    return FulltimeJob;
}(Job));
// Test
var parttime = new ParttimeJob("Part-time", 80);
var fulltime = new FulltimeJob("Full-time");
parttime.printType(); // method thường
console.log("Lương:", parttime.calculateSalary()); // abstract method
fulltime.printType();
console.log("Lương:", fulltime.calculateSalary());
