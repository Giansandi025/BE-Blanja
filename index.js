const express = require("express");
var bodyParser = require('body-parser')
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config();



const mainRouter = require('./src/routes/index')
const product = require('./src/routes/products')
const category = require('./src/routes/category')
const {response} = require('./src/middleware/common')

/* const UsersRouter = require('./src/routes/users');
const router = require('./src/routes/products');
const ProductRouter = require('./src/routes/users') */
const transaction = require('./src/routes/transaction')

const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use('/product', product)
app.use('/category', category)
app.use('/transactions', transaction)

app.use(cors());
app.use(morgan("dev"));

app.use('/', mainRouter)
app.use('/img', express.static('./upload'));


app.all("*",(req,res,next)=>{
  response(res,404,false,null,"404 Not Found");
})

/* app.get("/",(req,res,next)=>{
  res.status(200).json({status:"success",statusCode:200})
})
 */
app.listen (port, () =>{
  console.log(`Example app Listening on port ${port}`)
})
