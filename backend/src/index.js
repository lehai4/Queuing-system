const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const route = require("./routes");
const db = require("./config/db");

//Connect db
db.connect();

dotenv.config();
const app = express();
const port = 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// middleware handle for res.body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());

//HTTP logger
app.use(morgan("combined"));

//Routes init
route(app);

// 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
