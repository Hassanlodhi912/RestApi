const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        },
        Price: {
            type: Number,
            required: [true, "Price must be Provided"],
        },

        createdA: {
            type: Date,
            default: Date.now(),
        },
        
        description: {
            type: String,
            required: true,
        },

    }
)

module.exports = mongoose.model("Product",productSchema)