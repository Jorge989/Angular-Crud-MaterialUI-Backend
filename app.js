const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRoutes");
const app = express();
app.use(cors());

//*?rouets
if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
module.exports = app;
