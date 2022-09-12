const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "nome do produto é obrigatório."],
  },
  category: {
    type: String,
    required: [true, "categoria é obrigatória."],
  },
  comment: {
    type: String,
  },
  date: {
    type: String,
    required: [true, "data é obrigatória."],
  },
  freshness: {
    type: String,
    required: [true, "característica é obrigatória."],
  },
  price: {
    type: Number,
    required: [true, "preço é obrigatório."],
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
