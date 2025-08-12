abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract displayInfo(): void;
}

class Student extends Person {
    public id: string;

    constructor(id: string, name: string) {
        super(name);
        this.id = id;
    }

    public displayInfo(): void {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    public displayInfo(): void {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}


const student = new Student("S001", "Nguyen Van A");
const teacher = new Teacher("Tran Van B", "Mathematics");

student.displayInfo();
console.log("---------------");
teacher.displayInfo();
