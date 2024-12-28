import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  cors({
    origin: "http://localhost/5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeader: ["Content-Type"],
  })
);

// Routes
app.get("/", (req, res) => {
  console.log(req.method, req.url);
  return res.status(200).send("Success");
});

// Book routes
app.use("/books", bookRoutes);

// Database Connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to Database");
    app.listen(PORT, () => {
      console.log(`Server has started on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
