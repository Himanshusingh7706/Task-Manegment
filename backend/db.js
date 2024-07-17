const mongoose = require("mongoose");
// const MONGOURI = "mongodb://127.0.0.1:27017/todo1";
const MONGOURI =
  "mongodb+srv://avrockhimanshu007:Himanshu123@cluster0.pmzpabd.mongodb.net/todos1?retryWrites=true";

const connectDB = async () => {
  const { connection } = await mongoose.connect(MONGOURI);
  console.log(`DB Connected to ${connection.host}`);
};

// mongoose.connect(
//   "mongodb+srv://avrockhimanshu007:Hima@123@cluster0.0jz3vtz.mongodb.net/"
// );
// mongoose.connect(
//   "mongodb+srv://avrockhimanshu007:Himanshu123@cluster0.pmzpabd.mongodb.net/todos1?retryWrites=true"
// );
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  complited: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
  connectDB,
};
