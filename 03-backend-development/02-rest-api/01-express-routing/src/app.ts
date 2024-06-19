import express, { Request, Response } from "express";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express!");
});
app.post("/", (req, res) => {
  res.send("Coming from POST");
});
app.put("/:id", (req, res) => {
  console.log(res);
  res.send(`Coming from PUT with id: ${req.params.id}`);
});
app.delete("/:id", (req, res) => {
  res.send(`Coming from DELETE with id: ${req.params.id}`);
});

app.get(
  "/example/a",
  (req, res, next) => {
    console.log("This logs won't show up");
    next();
  },
  (req, res) => {
    res.send("Hello from /example/a");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
