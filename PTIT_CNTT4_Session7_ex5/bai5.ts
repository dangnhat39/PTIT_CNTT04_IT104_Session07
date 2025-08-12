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
            console.log("Đăng nhập thành công");
            this.isLogin = true;
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

// Test
const user1 = new userAcc(1, "VinhVlogs", "123456", "user", "active");
user1.login();    
user1.logout();   

console.log("---------------");

const user2 = new userAcc(2, "Hacker", "abc123", "user", "banned");
user2.login();    
user2.logout();   
