const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
const port = process.env.PORT || 3000;
app.set(port);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://main--baza-react.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Routes
app.use(require("./routes/index"));
app.use("/api/products", require("./routes/products"));

// INICAR SERVIDOR
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
