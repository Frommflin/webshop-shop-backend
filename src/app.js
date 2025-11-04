import express from "express";
import productRoutes from "./routers/productRoutes.js";
import orderRoutes from "./routers/orderRoutes.js";

const app = express();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

export default app;
