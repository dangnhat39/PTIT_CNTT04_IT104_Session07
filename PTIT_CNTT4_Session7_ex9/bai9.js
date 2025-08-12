var Comment = /** @class */ (function () {
    function Comment(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    Comment.prototype.addReply = function (reply) {
        this.replies.push(reply);
    };
    return Comment;
}());
var Post = /** @class */ (function () {
    function Post(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    Post.prototype.addLike = function (userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    };
    Post.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    return Post;
}());
var User = /** @class */ (function () {
    function User(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    User.prototype.createPost = function (postId, content) {
        var post = new Post(postId, this.id, content);
        this.posts.push(post);
        return post;
    };
    User.prototype.comment = function (post, commentId, content, parentComment) {
        var newComment = new Comment(commentId, this.id, content);
        if (parentComment) {
            parentComment.addReply(newComment);
        }
        else {
            post.addComment(newComment);
        }
    };
    User.prototype.follow = function (user) {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
        }
    };
    User.prototype.likePost = function (post) {
        post.addLike(this.id);
    };
    User.prototype.viewFeed = function () {
        console.log("--- B\u1EA3ng tin c\u1EE7a User ".concat(this.id, " ---"));
        this.followers.forEach(function (user) {
            user.posts.forEach(function (post) {
                console.log("B\u00E0i \u0111\u0103ng ".concat(post.id, " c\u1EE7a User ").concat(user.id, ": ").concat(post.content));
            });
        });
    };
    return User;
}());
// --- Test ---
var user1 = new User(1);
var user2 = new User(2);
var user3 = new User(3);
user1.follow(user2);
user1.follow(user3);
var post1 = user2.createPost(101, "Hello từ User 2!");
var post2 = user3.createPost(102, "User 3 đang ăn cơm.");
user1.likePost(post1);
user1.comment(post1, 201, "Hay quá!");
var cmtReply = new Comment(202, user1.id, "Cảm ơn!");
user2.comment(post1, 203, "Trả lời bình luận", post1.comments[0]);
user1.viewFeed();
