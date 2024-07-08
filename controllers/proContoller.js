const product = require("../Model/proSchema");

const addProduct = async (req, res) => {
    console.log(req);
    const newproduct = new product(req.body);
    try{
        await newproduct.save();
        res.status(200).json({
            message: "Product added successfully",
        });
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

const getProducts = async (req, res) => {
    const products = await product.find();
    try{
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const deleteproduct = await product.findByIdAndDelete(id);
      res.status(200).json(deleteproduct);
    } catch (err) {
      console.log(err);
    }
  };

module.exports = {addProduct, getProducts, deleteProduct};