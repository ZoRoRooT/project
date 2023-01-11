import express from "express";
import mysql from "mysql2";
import bcrypt from "bcrypt"

const port = 5000;
const app = express();
app.use(express.json())

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
    const salt = bcrypt.genSaltSync(10);
    const hash= bcrypt.hashSync(req.body.password,salt)
    const q ="INSERT INTO users(`username`,`password`) VALUES(?)"
    const values =[
        req.body.username,
        hash
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("User Created");
      });
   
})

app.get("/login",(req,res)=>{
    const b = `SELECT * FROM users WHERE username='${req.body.username}'`;
  db.query(b, async (err, data) => {
    console.log(err,data.length);
    if (err) return res.json("user not found");
    if(data.length>0){
        console.log(data);
        const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        data[0].password
        );
        console.log(isPasswordCorrect);
    if(isPasswordCorrect==true) 
    return res.json(data[0].username)
    return res.json("worng username or Password ")
}else{
    return res.json("user Name not found")
}
  });

})


app.listen(port, () => {
  console.log(`connected at ${port}`);
});
