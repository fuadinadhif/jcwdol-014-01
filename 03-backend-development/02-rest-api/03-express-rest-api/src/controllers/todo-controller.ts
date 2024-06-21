import { Response, Request } from "express";

import fs from "fs/promises";

const filePath = "./src/data/todos.json";

async function getTodos() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTodos(req: Request, res: Response) {
  try {
    const todos = await getTodos();
    res
      .status(200)
      .json({ message: "Success getting all of the to do list", todos });
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleTodo(req: Request, res: Response) {
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
}

export async function createTodo(req: Request, res: Response) {
  try {
    const { title, description, completed } = req.body;

    if (!title && !description && completed === undefined) {
      res.status(400).json({ message: "Require fields is missing" });
    }

    const todos = await getTodos();
    const newTodo = { title, description, completed, id: todos.length + 1 };
    todos.push(newTodo);
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
    res.status(201).json({ message: "Success adding new todo", newTodo });
  } catch (error) {
    console.error(error);
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const todos = await getTodos();
    const todoIndex = todos.findIndex(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );
    const todo = todos[todoIndex];

    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }

    todos[todoIndex] = { ...todo, ...req.body };
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
    res.status(200).json({ message: "Update succesfull" });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const todos = await getTodos();
    const todoIndex = todos.findIndex(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );

    if (todoIndex === -1) {
      res.status(404).json({ message: "Todo not found" });
    }

    todos.splice(todoIndex, 1);
    await fs.writeFile(filePath, JSON.stringify(todos, null));
    res.status(200).json({ message: "Delete successfull" });
  } catch (error) {
    console.error(error);
  }
}
