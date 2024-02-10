import { Schema, model } from "mongoose";

const expenseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Expense Name is required"],
    },
    expenseType: {
      type: String,
      trim: true,
      required: [true, "Expense Type is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Expense = model("Expense", expenseSchema);
