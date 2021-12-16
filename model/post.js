const mongoose = require("mongoose");
const { Schema } = mongoose;

const postScema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", postScema);
