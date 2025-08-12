abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract makeNoise(): void;

    public printName(): void {
        console.log(`Animal Name: ${this.name}`);
    }
}

class Cat extends Animal {
    public makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    public makeNoise(): void {
        console.log("gâu gâu");
    }
}


const cat = new Cat("Mimi");
cat.printName();
cat.makeNoise();

console.log("-------------");

const dog = new Dog("Kiki");
dog.printName();
dog.makeNoise();
