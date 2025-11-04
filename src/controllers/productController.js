import Product from "../models/ProductModel.js";

// Skapar en ny produkt
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      description,
      image,
      sizes,
      colors,
      quantity,
    } = req.body;

    // Grundläggande required-fältskontroll för snabbare och tydligare 400-svar
    if (!name || price === undefined || !category) {
      return res
        .status(400)
        .json({ message: "name, price and category are required" });
    }

    // Bygg objekt som vi skickar till Mongoose (undvik att spara undefined-fält)
    const productData = { name, price, category };

    if (description !== undefined) productData.description = description;
    if (image !== undefined) productData.image = image;
    if (Array.isArray(sizes)) productData.sizes = sizes;
    if (Array.isArray(colors)) productData.colors = colors;
    if (quantity !== undefined) productData.quantity = quantity;

    // Skapa och spara dokumentet via Mongoose
    const product = await Product.create(productData);

    // Returnera 201 Created med det skapade dokumentet
    return res.status(201).json(product);
  } catch (err) {
    console.error("createProduct error:", err);

    // Hantera Mongoose-valideringsfel separat så klienten får användbara meddelanden
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: "Validation error", errors: messages });
    }

    // Generellt serverfel
    return res.status(500).json({ message: "Server error" });
  }
};

export default createProduct;