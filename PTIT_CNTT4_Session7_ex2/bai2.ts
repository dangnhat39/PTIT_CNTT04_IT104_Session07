class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
    }

    public speedUp(amount: number): void {
        this.speed += amount;
    }

    public showSpeed(): void {
        console.log(`Current Speed: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
        console.log(`Bicycle Name: ${this.name}`);
        console.log(`Speed: ${this.speed} km/h`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}

// Test
const bike = new Bicycle("Mountain Bike", 10, "B001", 18);
bike.showInfo();
bike.speedUp(5);
bike.showSpeed();
bike.slowDown(8);
bike.showSpeed();
