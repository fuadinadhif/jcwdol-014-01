import Express from "express";

import {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo-controller.js";

const router = Express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getSingleTodo).put(updateTodo).delete(deleteTodo);

export default router;
