import express from "express";

const app = express();

// Products routes
app.get("/products", (req, res) => {
  res.send(`Get all products`);
});
app.get("/products/:id", (req, res) => {
  res.send(`Product id ${req.params.id}`);
});
app.post("/products", (req, res) => {
  res.send(`Create new product`);
});
app.put("/products/:id", (req, res) => {
  res.send(`Update product with id ${req.params.id}`);
});
app.delete("/products/:id", (req, res) => {
  res.send(`Delete product with id ${req.params.id}`);
});

// Order routes
app.get("/orders", (req, res) => {
  res.send(`Get all orders belonging to logged in user`);
});
app.get("/orders/:id", (req, res) => {
  res.send(`Order id ${req.params.id}`);
});
app.post("/orders", (req, res) => {
  res.send(`Create new order`);
});
app.delete("/orders/:id", (req, res) => {
  res.send(`Delete/Cancel order with id ${req.params.id}`);
});

export default app;
