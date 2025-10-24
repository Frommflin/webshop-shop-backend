import express from "express";

const router = express.Router();

// ==== CREATE ====
router.post("/", (req, res) => {
  res.send(`Create new order`);
});

// ==== READ ====
router.get("/", (req, res) => {
  res.send(`Get all orders belonging to logged in user`);
});

router.get("/:id", (req, res) => {
  res.send(`Order id ${req.params.id}`);
});

// ==== DELETE ====
router.delete("/:id", (req, res) => {
  res.send(`Delete/Cancel order with id ${req.params.id}`);
});

export default router;
