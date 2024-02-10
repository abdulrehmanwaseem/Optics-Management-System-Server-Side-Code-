import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    companyName: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company Name is required"],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Item Name is required"],
      maxlength: [50, "Item Name cannot be more than 50 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const Item = model("Item", itemSchema);
