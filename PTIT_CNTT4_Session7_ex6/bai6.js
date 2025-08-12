var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        }
        else {
            console.log("Danh sách học sinh:");
            this.students.forEach(function (stu) {
                console.log("ID: ".concat(stu.getId(), ", Name: ").concat(stu.getName()));
            });
        }
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.filter(function (stu) { return stu.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (stu) { return stu.getId() === id; });
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh ID ".concat(id, " trong danh s\u00E1ch t\u1EA5t c\u1EA3 h\u1ECDc sinh."));
        }
    };
    return Classroom;
}());
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Cường"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Lan"));
var classA = new Classroom();
var classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Lớp A:");
classA.showStudents();
console.log("\nLớp B:");
classB.showStudents();
console.log("\nDanh sách học sinh còn lại:");
console.log(allStudents);
