const express = require("express");
const { createTodo } = require("./types"); // destructured object
const { todo, connectDB } = require("./db");
const cors = require("cors");
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedpayload = createTodo.safeParse(createPayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "You sent a wrong input",
    });
    return;
  }

  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    complited: false,
  });
  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/complited", async function (req, res) {
  const updatePayload = req.body;
  const parsedpayload = updateTodo.safeParse(updatePayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "You Sent a wrong input",
    });
    return;
  }
  // update it in data base
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      complited: true,
    }
  );
  res.json({
    msg: "Todo mark as completed",
  });
});

app.listen(3000);
