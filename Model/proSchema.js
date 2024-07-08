const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    //code,name,quantity
    {
        code:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type: String,
            required: true,
        },
    },
    {
        collection: "products",
    }
);

module.exports = mongoose.model("products", productSchema);
