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

// Hämta en lista med produkter (med pagination och enkla filter)
// OBS: returnerar endast en array med produkter (ingen `meta`)
export const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      minPrice,
      maxPrice,
      search,
    } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = Number(minPrice);
      if (maxPrice !== undefined) filter.price.$lte = Number(maxPrice);
    }
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const skip = (Number(page) - 1) * Number(limit);

    // Hämta endast produkter (array)
    const products = await Product.find(filter).skip(skip).limit(Number(limit));

    return res.json(products);
  } catch (err) {
    console.error("getProducts error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Hämta en produkt per id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  } catch (err) {
    console.error("getProductById error:", err);
    // Hantera ogiltigt ObjectId / CastError
    if (err.name === "CastError" || err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid product id" });
    }
    return res.status(500).json({ message: "Server error" });
  }
};

export default createProduct;