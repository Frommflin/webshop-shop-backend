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

// GDPR 25 – Begränsad åtkomst: endast autentiserad användare
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// GDPR 25 – Begränsad åtkomst och säker borttagning, Endast den autentiserade användaren får ta bort sin egen order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found or unauthorized" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};

