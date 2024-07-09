const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname + "/date.js");

const app=express();

let itemarray=["Buy Food","Cook Food","Eat Food"];
let workitem=[];

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
    //ye jo item variable hai iska use app.get main use hai lekin vaha pe item undefined 
    //dihkha dega issi liye var item ko uppar globally define kr diya hai
 
    if(req.body.list==="Work")
    {
        workitem.push(item);
        res.redirect("/work");
    }else{
        itemarray.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",
    {
        listtitle:"Work list",
        newlistitem: workitem
    });
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});
