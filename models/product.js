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
        Image: {
          type: String,
          required: true,
      },


        createdA: {
            type: Date,
            default: Date.now(),
        },
        category: {
            type: String,
            enum: {
              values: ["featured", "bestseller", "toprated"],
              message: `{VALUE} is not supported`,
            },
          },
          screen: {
            type: String,
            enum: {
              values: ["clothes", "homeappliances", "furniture","kitchen","home"],
              message: `{VALUE} is not supported`,
            },
          },
        
        description: {
            type: String,
            required: true,
        },

    }
)

module.exports = mongoose.model("Product",productSchema)