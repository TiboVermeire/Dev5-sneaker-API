const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShoeSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  lacesColor: {
    type: String,
    required: true,
  },
  sole_1Color: {
    type: String,
    required: true,
  },
  sole_2Color: {
    type: String,
    required: true,
  },
  insideColor: {
    type: String,
    required: true,
  },
  outside_1Color: {
    type: String,
    required: true,
  },
  outside_2Color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shoes = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoes;
