const authRouter = require("./authRoute");
const userRouter = require("./userRoute");

function route(app) {
  app.use("/v1/auth", authRouter);
  app.use("/v1/user", userRouter);
}
module.exports = route;
