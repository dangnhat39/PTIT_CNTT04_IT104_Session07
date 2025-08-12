var MenuItem = /** @class */ (function () {
    function MenuItem(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return MenuItem;
}());
var Table = /** @class */ (function () {
    function Table(id, capacity, available) {
        if (available === void 0) { available = true; }
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
    return Table;
}());
var Reservation = /** @class */ (function () {
    function Reservation(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
    return Reservation;
}());
var Order = /** @class */ (function () {
    function Order(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Order.prototype.getTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    return Order;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    Restaurant.prototype.addMenuItem = function (item) {
        this.menu.push(item);
    };
    Restaurant.prototype.addTable = function (table) {
        this.tables.push(table);
    };
    Restaurant.prototype.makeReservation = function (resId, customerName, tableId) {
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log("B\u00E0n ".concat(tableId, " \u0111\u00E3 \u0111\u01B0\u1EE3c \u0111\u1EB7t tr\u01B0\u1EDBc!"));
            return;
        }
        table.available = false;
        this.reservations.push(new Reservation(resId, customerName, tableId));
        console.log("\u0110\u1EB7t b\u00E0n ".concat(tableId, " cho ").concat(customerName, " th\u00E0nh c\u00F4ng!"));
    };
    Restaurant.prototype.placeOrder = function (orderId, tableId, itemIds) {
        var _this = this;
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (!table || table.available) {
            console.log("Bàn chưa được đặt!");
            return;
        }
        var order = new Order(orderId, tableId);
        itemIds.forEach(function (id) {
            var item = _this.menu.find(function (m) { return m.id === id; });
            if (item)
                order.addItem(item);
        });
        this.orders.push(order);
        console.log("\u0110\u1EB7t m\u00F3n cho b\u00E0n ".concat(tableId, " th\u00E0nh c\u00F4ng!"));
    };
    Restaurant.prototype.generateBill = function (tableId) {
        var order = this.orders.find(function (o) { return o.tableId === tableId; });
        if (!order) {
            console.log("Không tìm thấy đơn hàng cho bàn này!");
            return;
        }
        var total = order.getTotal();
        console.log("T\u1ED5ng ti\u1EC1n b\u00E0n ".concat(tableId, ": ").concat(total, " VND"));
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (table)
            table.available = true;
        console.log("B\u00E0n ".concat(tableId, " \u0111\u00E3 s\u1EB5n s\u00E0ng cho kh\u00E1ch m\u1EDBi!"));
    };
    return Restaurant;
}());
// --- Test ---
var restaurant = new Restaurant();
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
