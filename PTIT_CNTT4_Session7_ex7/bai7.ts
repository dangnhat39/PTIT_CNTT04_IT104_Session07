class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: "active" | "inactive";

    constructor(accountNumber: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }

    public deposit(amount: number): void {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nạp ${amount} - Số dư hiện tại: ${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && this.status === "active" && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} - Số dư hiện tại: ${this.balance}`);
        }
    }

    public showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((item) => console.log(item));
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    public withdraw(amount: number): void {
        if (amount > 0 && this.status === "active") {
            if (this.balance - amount >= 0) {
                this.balance -= amount;
                this.history.push(`Rút ${amount} - Số dư hiện tại: ${this.balance}`);
            } else {
                console.log("Không thể rút quá số dư hiện tại");
            }
        }
    }
}

// Test
const savingAcc = new SavingAccount("AC001", 1000, 0.05);
savingAcc.deposit(500);
savingAcc.withdraw(300);
savingAcc.withdraw(1500); 
savingAcc.showHistory();
