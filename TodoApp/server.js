const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
//Import router from controllers
const todoRouter = require("./controllers/todo");
//Import method-override for form submissions
const methodOverride = require('method-override');

//MIDDLEWARE

app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true })); //READ DATA SENT FROM FORMS
app.use(methodOverride("_method"));

//ROUTES AND ROUTERS

app.get("/", (req, res) => {
    res.send("Hello World");
});
//all requests to /todo URL go to the todoRouter
app.use("/todo", todoRouter);

//LISTENER

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
