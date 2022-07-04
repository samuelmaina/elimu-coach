const mongoose = require("mongoose");

const converstionSchema = new mongoose.Schema(
  {
    numeral: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 1000,
    },
    fromBase: {
      type: Number,
      required: true,
      min: 2,
      max: 1000,
    },
    toBase: {
      type: Number,
      required: true,
      min: 2,
      max: 1000,
    },
  },
  {
    timestamp: true,
  }
);

export default converstionSchema;
