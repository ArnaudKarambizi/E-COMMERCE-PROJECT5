const mongoose = require("mongoose");
// we are going to create a schema
const schema = mongoose.Schema;
// create schema
const ProductsSchema = new schema({
  ProductName: { type: String },
  Product_Description: { type: String },
  Product_Category: { type: String },
  Price: { type: Number },
  Product_image: { type: String }
});

// because we have no access
module.exports = Products = mongoose.model("products", ProductsSchema);
