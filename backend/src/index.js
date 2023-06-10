const express = require("express");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const route = require("../src/routes");
const db = require("../src/config/db");

//Connect db
db.connect();

dotenv.config();
const app = express();
const port = `${process.env.PORT}` || 3001;

const whitelist = ["http://localhost:3000", "https://queuing-api.vercel.app"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(bodyParser.json());

//HTTP logger
app.use(morgan("combined"));

//Routes init
route(app);

const server = http.createServer(app);

// 127.0.0.1
server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
