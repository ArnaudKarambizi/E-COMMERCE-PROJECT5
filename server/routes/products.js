// all of routes will go

const express = require("express");

//router part of the router object
const router = express.Router();

//Products model we need it to make querries,save ,find etc..
const Products = require("../models/Products");

// '/' is  api/products   because we have already used /routes/api/products in server

// ────────────────────────────────────────────── I ──────────
// :::::: G E T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// GET api/products , Get all products
//we want to fetch products in the database
// ────────────────────────────────────────────────────────────────────────────────

router.get("/", (req, res) => {
  // take the model
  Products.find()
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ success: false }));
});

// ────────────────────────────────────────────────────────────────────────────────
//GET api/products/:id, GET a hproduct
//we want to fetch products in the database
// ────────────────────────────────────────────────────────────────────────────────

router.get("/:id", (req, res) => {
  // req.params.id fetch the id from the uri
  Products.findById(req.params.id)
    .then(Product=> res.json(Product))
    .catch(err => res.status(404).json({ success: false }));
});

router.get("/productFilter/:query", (req, res) => {
  let query = req.params.query;

  Products.find()
    .then(products => {
      let filterResults = products.filter(product => {
        if (product.ProductName.toLowerCase().includes(query.toLowerCase())) {
          return product;
        }
      });

      res.json(filterResults);
    })
    .catch(err => res.status(404).json({ success: false }));
});

// ──────────────────────────────────────────────── II ──────────
//   :::::: P O S T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// POST api/products CREATE  a  product
// we want to post products in the database
// ────────────────────────────────────────────────────────────────────────────────

router.post("/", (req, res) => {
  // create new product from the Products model
  const {
    ProductName,
    Product_Description,
    Product_Category,
    Price,
    Product_image
  } = req.body;

  const newProducts = new Products({
    ProductName,
    Product_Description,
    Product_Category,
    Price,
    Product_image
  });
  newProduct.save().then(house => res.json(product));
});

// ────────────────────────────────────────────── III ──────────
//   :::::: P U T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
//  PUT api/products/:id, Update a product
//we want to fetch products in the database
// ────────────────────────────────────────────────────────────────────────────────
router.put("/:id", (req, res) => {
  Products.findByIdAndUpdate(
    // the id of the item to find
    req.params.id,

    // the change to be made. Mongoose will smartly combine your existing
    // document with this change, which allows for partial updates too
    req.body,

    // an option that asks mongoose to return the updated version
    // of the document instead of the pre-updated one.
    { new: true },

    // the callback function
    (err, product) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.send(house);
    }
  );
});

// ──────────────────────────────────────────────────── IV ──────────
//   :::::: D E L E T E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────

//===========================================
// DELETE api/products/:id, DELETE a product
//we want to fetch products in the database
//===========================================
router.delete("/", (req, res) => {
  // req.params.id fetch the id from the uri
  Products.find()
    .then(products => products.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.delete("/:id", (req, res) => {
  // req.params.id fetch the id from the uri
  Products.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//===========================================
//export so that other files
// can read what is in this file
//===========================================
module.exports = router;
 
