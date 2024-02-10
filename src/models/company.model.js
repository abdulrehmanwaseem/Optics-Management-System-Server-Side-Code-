import { Schema, model } from "mongoose";
import validator from "validator";

const companySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Company Name is required"],
      maxlength: [50, "Name cannot be more than 50 characters"],
      validate: {
        validator: (value) =>
          validator.isAlphanumeric(value, "en-US", { ignore: " -" }),
        message:
          "Company Name must be alphanumeric and may contain spaces or hyphens",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Company = model("Company", companySchema);
