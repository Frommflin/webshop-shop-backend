import Order from "../models/Order.Models.js";
export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    // GDPR 25 – endast nödvändiga uppgifter lagras
    const order = await Order.create({
       userId: req.user.id,
       userName: req.user.name,
      items,
      totalAmount,
      createdAt: new Date()
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};