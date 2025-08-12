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
    Student.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom(className) {
        this.className = className;
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        console.log("Danh s\u00E1ch h\u1ECDc sinh l\u1EDBp ".concat(this.className, ":"));
        this.students.forEach(function (s) {
            console.log("ID: ".concat(s.getId(), " - Name: ").concat(s.getName()));
        });
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
        }
        console.log("----------------------");
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.find(function (s) { return s.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log("Không tìm thấy học sinh trong danh sách tất cả học sinh.");
        }
    };
    Classroom.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
            console.log("\u0110\u00E3 x\u00F3a h\u1ECDc sinh ID ".concat(id, " kh\u1ECFi l\u1EDBp ").concat(this.className));
        }
        else {
            console.log("Không tìm thấy học sinh trong lớp.");
        }
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var student = this.students.find(function (s) { return s.getId() === id; });
        if (student) {
            student.setName(newName);
            console.log("\u0110\u00E3 \u0111\u1ED5i t\u00EAn h\u1ECDc sinh ID ".concat(id, " th\u00E0nh ").concat(newName));
        }
        else {
            console.log("Không tìm thấy học sinh trong lớp.");
        }
    };
    return Classroom;
}());
var s1 = new Student(1, "An");
var s2 = new Student(2, "Bình");
var s3 = new Student(3, "Cường");
var s4 = new Student(4, "Dũng");
var s5 = new Student(5, "Hà");
var s6 = new Student(6, "Lan");
allStudents.push(s1, s2, s3, s4, s5, s6);
var classA = new Classroom("A");
var classB = new Classroom("B");
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
classA.showStudents();
classB.showStudents();
classA.removeStudent(2);
classA.showStudents();
console.log("Tất cả học sinh còn lại ngoài lớp:", allStudents.map(function (s) { return s.getName(); }));
classB.editStudent(4, "Dũng Pro");
classB.showStudents();
