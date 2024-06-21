import express from "express";

import todoRoutes from "./routes/todo-route.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/v1/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
