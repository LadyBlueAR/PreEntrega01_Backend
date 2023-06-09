import express, { urlencoded } from 'express';
import products from './routes/products.router.js';
import carts from './routes/carts.router.js';
const app = express();

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use("/products", products)
app.use("/carts", carts)

app.get('/',  (req, res) => {
  res.json({ saludo: "Bienvenidos a mi Ecommerce"});
})


app.listen(8080, () => {
    console.log("Server is running on port 8080");
})