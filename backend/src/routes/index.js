const authRouter = require("./authRoute");
const userRouter = require("./userRoute");
const middlewareController = require("../app/controllers/middlewareController");
function route(app) {
  app.use("/v1/auth", authRouter);
  app.use("/v1/user", middlewareController.middlewareCORS, userRouter);
}
module.exports = route;
