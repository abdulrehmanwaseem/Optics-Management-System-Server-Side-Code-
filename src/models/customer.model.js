import { Schema, model } from "mongoose";

const prescriptionSchema = new Schema({
  eyeSight: {
    type: String,
    enum: ["Distance", "Bifocal", "Progressive", "Near Vision"],
    required: [
      true,
      "Eyesight is Required and Must be Distance, Bifocal, Progressive, or Near Vision",
    ],
  },
  prescribedBy: {
    type: String,
    required: [true, "Doctor's Name is Required"],
  },
  prescriptionDate: {
    type: Date,
    required: [true, "Prescription Date Is Required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"],
  },
  leftEye: {
    sph: {
      type: Number,
      required: [true, "Please Enter SPH for Left Eye"],
    },
    cyl: {
      type: Number,
      required: [true, "Please Enter CYL for Left Eye"],
    },
    axis: {
      type: Number,
      required: [true, "Please Enter AXIS for Left Eye"],
    },
  },
  rightEye: {
    sph: {
      type: Number,
      required: [true, "Please Enter SPH for Right Eye"],
    },
    cyl: {
      type: Number,
      required: [true, "Please Enter CYL for Right Eye"],
    },
    axis: {
      type: Number,
      required: [true, "Please Enter AXIS for Right Eye"],
    },
  },
  nearAdd: {
    leftEye: {
      type: Number,
    },
    rightEye: {
      type: Number,
    },
  },
});

const contactNumberValidator = {
  validator: (value) => /^\d{11}$/.test(value), // Assuming a 10-digit phone number
  message: "Invalid contact number. Please enter a 11-digit number.",
};

const customerSchema = new Schema(
  {
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
    age: {
      type: Number,
      required: [true, "Please Enter Customer Age"],
    },
    prescriptions: [prescriptionSchema],
  },
  {
    timestamps: true,
  }
);

export const Customer = model("Customer", customerSchema);
