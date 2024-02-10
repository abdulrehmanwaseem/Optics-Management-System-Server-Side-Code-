import mongoose, { Schema, model } from "mongoose";

const contactNumberValidator = {
  validator: (value) => /^\d{11}$/.test(value), // Assuming a 11-digit phone number
  message: "Invalid contact number. Please enter a 10-digit number.",
};

const venderSchema = new Schema(
  {
    companyName: {
      type: mongoose.Schema.ObjectId,
      ref: "Company",
    },
    name: {
      type: String,
      required: [true, "Please Enter Customer Name"],
      trim: true,
    },
    contact1: {
      type: String,
      trim: true,
      validate: contactNumberValidator,
      required: [true, "Contact 1 is required"],
    },
    contact2: {
      type: String,
      trim: true,
      validate: contactNumberValidator,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Vender = model("Vender", venderSchema);
