const express = require('express');
const path = require('path')
const app = express();
const puerto=3000;

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(puerto, () => {
    console.log(`Servidor listo en http://localhost:${puerto}/`)
  });
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get("/register", (req,res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.post("/register", (req,res) => {
  res.send("Te registraste con exito!")
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.get('/productDetail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})
