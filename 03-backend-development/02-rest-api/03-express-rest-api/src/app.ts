import express, { Request, Response, NextFunction } from "express";
import fs from "fs/promises";

const app = express();
const PORT = 8000;
const filePath = "./src/data/todos.json";

async function getTodos() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

app.get("/api/v1/todos", async (req, res) => {
  try {
    const todos = await getTodos();
    res
      .status(200)
      .json({ message: "Success getting all of the to do list", todos });
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v1/todos/:id", async (req, res) => {
  try {
    const todos = await getTodos();
    const todo = todos.find(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );

    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ todo });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
