const express = require("express")
const mysql=require("mysql2")
const bcrypt =require("bcrypt")
const cors = require('cors')
const jwt =require('jsonwebtoken')
const port = 5000;
const app = express();
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "data",
});


app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  const b = "SELECT * FROM products";
  db.query(b, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/addusers",(req,res)=>{
    const s = `SELECT * FROM users WHERE username='${req.body.username}'`;
    db.query(s, async (err, data) => {
      console.log(err,data.length);
      if(data.length===0){

        const salt = bcrypt.genSaltSync(10);
    const hash= bcrypt.hashSync(req.body.password,salt)
    const q ="INSERT INTO users(`name`,`username`,`password`) VALUES(?)"
    const values =[
        req.body.name,
        req.body.username,
        hash
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        var t=jwt.sign(req.body.username,"super")
          return res.send({token:t})
      });
      }else{
        res.send({message:"user exist"})
      }
    })

    
   
})

app.post("/login",(req,res)=>{
  console.log(req.body);
    const b = `SELECT * FROM users WHERE username='${req.body.username}'`;
  db.query(b, async (err, data) => {
    console.log(err,data.length);
    if (err) return res.send({message:"user not found"});
    if(data.length>0){
        console.log(data);
        const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        data[0].password
        );
        console.log(isPasswordCorrect);
    if(isPasswordCorrect==true) {
      var token=jwt.sign(data[0].username,"super")
    return res.send({token:token})}
    return res.send({message:"worng username or Password "})
}else{
    return res.send({message:"user Name not found"})
}
  });

})


app.listen(port, () => {
  console.log(`connected at ${port}`);
});
