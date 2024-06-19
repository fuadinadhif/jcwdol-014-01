import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 8000;

const Logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("Application Middleware");
  console.log(`Request URL: ${req.url}`);
  next();
};

// Built in middleware
app.use(express.static("public"));

// Application middleware
app.use(Logger);

// Route middleware
app.use("/users/:id", (req, res, next) => {
  console.log("Route Middleware");
  next();
});

app.get("/users", (req, res) => res.send("Hello, Middleware!"));
app.post("/users", (req, res) => res.send("Comming from POST"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
