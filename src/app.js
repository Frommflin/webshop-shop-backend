import express from "express";
import productRoutes from "./routers/productRoutes.js";

const app = express();

app.use("/products", productRoutes);

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
