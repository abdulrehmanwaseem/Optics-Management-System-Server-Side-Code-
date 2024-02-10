import { Schema, model } from "mongoose";
import validator from "validator";

const accountSchema = new Schema(
  {
    accountName: {
      type: String,
      trim: true,
      required: [true, "Account Name is required"],
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    accountNumber: {
      type: String,
      required: [true, "Number is required"],
      validate: {
        validator: (value) => validator.isNumeric(value),
        message: "Number must be numeric",
      },
      minlength: [10, "Number must be at least 10 characters"],
      maxlength: [20, "Number cannot be more than 20 characters"],
    },
    accountType: {
      type: String,
      required: [true, "Account Type is required"],
      enum: ["customer", "vender", "expense"],
    },
  },
  {
    timestamps: true,
  }
);

export const Account = model("Account", accountSchema);
