import Order from "../models/Order.Models.js";
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    // GDPR 25 – endast nödvändiga uppgifter lagras
    const order = await Order.create({
      user: req.user.id,
      items,
      totalPrice,
      createdAt: new Date()
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};