import express from "express";
const app = express();
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";

//Router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
///middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlingMiddleware from "./middleware/error-handling.js";
import authenticateUser from "./middleware/auth.js";
import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  // throw new Error("error");
  res.json({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  // throw new Error("error");
  res.json({ msg: "API V1!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`server is running on ${port}...`);
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
