const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://queuing-api:448m7JdX9WsWCrjd@queuing-api.xzzrt4g.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
module.exports = { connect };
