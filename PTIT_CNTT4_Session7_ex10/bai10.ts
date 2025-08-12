class MenuItem {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }
}

class Table {
    constructor(
        public id: number,
        public capacity: number,
        public available: boolean = true
    ) { }
}

class Reservation {
    constructor(
        public id: number,
        public customerName: string,
        public tableId: number
    ) { }
}

class Order {
    public items: MenuItem[];

    constructor(
        public id: number,
        public tableId: number
    ) {
        this.items = [];
    }

    public addItem(item: MenuItem): void {
        this.items.push(item);
    }

    public getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    public menu: MenuItem[] = [];
    public tables: Table[] = [];
    public reservations: Reservation[] = [];
    public orders: Order[] = [];

    public addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    public addTable(table: Table): void {
        this.tables.push(table);
    }

    public makeReservation(resId: number, customerName: string, tableId: number): void {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log(`Bàn ${tableId} đã được đặt trước!`);
            return;
        }
        table.available = false;
        this.reservations.push(new Reservation(resId, customerName, tableId));
        console.log(`Đặt bàn ${tableId} cho ${customerName} thành công!`);
    }

    public placeOrder(orderId: number, tableId: number, itemIds: number[]): void {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || table.available) {
            console.log("Bàn chưa được đặt!");
            return;
        }
        const order = new Order(orderId, tableId);
        itemIds.forEach(id => {
            const item = this.menu.find(m => m.id === id);
            if (item) order.addItem(item);
        });
        this.orders.push(order);
        console.log(`Đặt món cho bàn ${tableId} thành công!`);
    }

    public generateBill(tableId: number): void {
        const order = this.orders.find(o => o.tableId === tableId);
        if (!order) {
            console.log("Không tìm thấy đơn hàng cho bàn này!");
            return;
        }
        const total = order.getTotal();
        console.log(`Tổng tiền bàn ${tableId}: ${total} VND`);
        const table = this.tables.find(t => t.id === tableId);
        if (table) table.available = true;
        console.log(`Bàn ${tableId} đã sẵn sàng cho khách mới!`);
    }
}

// --- Test ---
const restaurant = new Restaurant();

// Thêm menu
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Bún chả", 40000));
restaurant.addMenuItem(new MenuItem(3, "Cà phê sữa", 20000));

// Thêm bàn
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));

// Đặt bàn
restaurant.makeReservation(101, "Nguyễn Văn A", 1);

// Đặt món
restaurant.placeOrder(201, 1, [1, 2, 3]);

// Thanh toán
restaurant.generateBill(1);
