const Author = require("./Author");
const Post = require("./Post");

const john = new Author("John Doe");

const post = john.writePost("Titulo", "Lorem ipsuon");

post.addComment("Isaac pontes", "Muito om!!");
post.addComment("Lucas", "Legal om!!");

console.log(john);
console.log(post);
