class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) { }
}

class Member {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: Book[] = [],
        public status: string = "active"
    ) { }
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) { }
}

class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    showBooks() {
        console.log("Danh sách sách:");
        this.books.forEach(b => {
            console.log(`${b.id} - ${b.title} (${b.author}) - ${b.stock} cuốn - ${b.status}`);
        });
    }

    registerMember(member: Member) {
        this.members.push(member);
    }

    blockMember(id: number) {
        const member = this.members.find(m => m.id === id);
        if (member) {
            member.status = "blocked";
            console.log(`Đã khóa thành viên: ${member.name}`);
        } else {
            console.log("Không tìm thấy thành viên!");
        }
    }

    showMembers() {
        console.log("Danh sách thành viên:");
        this.members.forEach(m => {
            console.log(`${m.id} - ${m.name} - ${m.contact} - ${m.status}`);
        });
    }
}

const library = new Library();

const book1 = new Book(1, "Sách A", "Tác giả A", 5, "available");
const book2 = new Book(2, "Sách B", "Tác giả B", 2, "available");
library.addBook(book1);
library.addBook(book2);

library.showBooks();

const member1 = new Member(1, "Nguyễn Văn A", "0123456789");
const member2 = new Member(2, "Trần Thị B", "0987654321");
library.registerMember(member1);
library.registerMember(member2);

library.showMembers();

library.blockMember(2);

library.showMembers();
