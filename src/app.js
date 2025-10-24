import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send({ success: true });
});

app.get("/", (req, res) => {
  res.send({ success: true });
});

export default app;
