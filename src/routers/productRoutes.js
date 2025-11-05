import express from "express";
import { createProduct, getProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

// ==== CREATE ====
router.post("/", createProduct);

// ==== READ ====
// Hämta lista med produkter (stöd för pagination/filter via query params)
router.get("/", getProducts);

// Hämta en produkt per id
router.get("/:id", getProductById);

// ==== UPDATE ====
// Knyt till en update-controller senare, t.ex. updateProduct
router.put("/:id", (req, res) => {
  res.send(`Update product with id ${req.params.id}`);
});

// ==== DELETE ====
// Knyt till en delete-controller senare, t.ex. deleteProduct
router.delete("/:id", (req, res) => {
  res.send(`Delete product with id ${req.params.id}`);
});

export default router;