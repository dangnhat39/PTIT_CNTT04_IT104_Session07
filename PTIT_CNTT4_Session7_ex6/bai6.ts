class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    public login(): void {
        console.log("Login method from Account");
    }

    public logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}

class userAcc extends Account {
    public status: "active" | "banned";

    constructor(id: number, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    public login(): void {
        if (this.status === "active") {
            console.log(`Người dùng ${this.userName} đăng nhập thành công`);
            this.isLogin = true;
        } else if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
        }
    }
}

class adminAcc extends Account {
    public banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa`);
    }
}


const user1 = new userAcc(1, "VinhVlogs", "123456", "user", "active");
const admin1 = new adminAcc(999, "AdminBoss", "adminpass", "admin");

user1.login();  
admin1.banUser(user1); 
user1.login();  
