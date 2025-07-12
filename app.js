<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http");  // <== Wrap Express for Vercel
const date = require("./date");

const app = express();
=======
const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname + "/date.js");
>>>>>>> f3912fd3610263033ad25b7d03e726892a9d909e

// Store to-do items
let itemarray = ["Buy Food", "Cook Food", "Eat Food"];
let workitem = [];

// View and static setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));         // updated path
app.use(express.static(path.join(__dirname, "public"))); // updated path
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
// Routes
app.get("/", function (req, res) {
  let day = date.getdate();
  res.render("list", {
    listtitle: day,
    newlistitem: itemarray
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workitem.push(item);
    res.redirect("/work");
  } else {
    itemarray.push(item);
    res.redirect("/");
  }
=======
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    let day=date.getdate();

    res.render("list",{
        listtitle: day,
        newlistitem: itemarray
    });
});

app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work")
    {
        workitem.push(item);
        res.redirect("/work");
    }else{
        itemarray.push(item);
        res.redirect("/");
    }
>>>>>>> f3912fd3610263033ad25b7d03e726892a9d909e
});

app.get("/work", function (req, res) {
  res.render("list", {
    listtitle: "Work list",
    newlistitem: workitem
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

<<<<<<< HEAD
// ⛔ REMOVE app.listen() – not allowed in Vercel

// ✅ EXPORT handler for Vercel
module.exports = app;
module.exports.handler = serverless(app);
=======
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
>>>>>>> f3912fd3610263033ad25b7d03e726892a9d909e
