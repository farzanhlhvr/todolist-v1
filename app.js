//jshint esversion:6

const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname + "/date.js");
//yaha pe module.export khali ye bataega kki getdate jaisa koi function hai 
//pr niche jb date main () ye laga diya to function run kr raha hai getdate aur value de raha hai 

const app=express();

let itemarray=["Buy Food","Cook Food","Eat Food"];
let workitem=[];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));//ye hai taki values yha se vha copy kr sake
app.use(express.static("public"));
//ye hai taki jo bhi extra cheezein add krni hai server ke through jaise ki css aur image to public ke madad se karenge

app.get("/",function(req,res){
    
    // let today=new Date();
    // var currentday=today.getDay();
    // var day="";

    // if(currentday===6 || currentday===0){
    //     day="Weekend";
    //     // res.write("<h1>Yah it's the weekend</h1>");
    // }
    // else{
    //     // res.write("<h1>Boo I have to work!</h1>");
    //     // res.send();
    //     day="Weekday";
    //     // res.sendFile(__dirname+"/index.html");

    //     //br br res.write lihkne se accha res.sendFile lihk do
    // }
    // res.render("list",{kindofday: day});

    // switch(currentday){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;  
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;  
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;  
    //     default:
    //         console.log("Error : current day is equal  to :" + currentday);             
    // }
    // res.render("list",{//ye render udar index main jake paste kr dega kindofday ki jagah 
    //     // day ko
    //     //npm i ejs issiliye kiya hai taki render ko use kr sake
    //     kindofday: day
    // });

    // let day=date.getday();
    //this is how we contacts different functions in the same page

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
