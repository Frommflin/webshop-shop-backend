import express from "express";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();

// ==== CREATE ====
router.post("/", createProduct);

// ==== READ ====
router.get("/", (req, res) => {
  res.send(`Get all products`);
});

router.get("/:id", (req, res) => {
  res.send(`Product id ${req.params.id}`);
});

// ==== UPDATE ====
router.put("/:id", (req, res) => {
  res.send(`Update product with id ${req.params.id}`);
});

// ==== DELETE ====
router.delete("/:id", (req, res) => {
  res.send(`Delete product with id ${req.params.id}`);
});

export default router;