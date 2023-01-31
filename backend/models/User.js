import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: [true, "Please input a name"] },
  lastName: { type: String, required: [true, "Please input a last name"] },
  email: {
    type: String,
    minLength: 10,
    lowercase: true,
    required: [true, "Please input an email"],
    unique: true,
  },
  password: {
    type: String,
    minLength: 6,
    max: 20,
    required: [true, "Please input a last password"],
  },
  dateCreated: { type: Date, immutable: true, default: Date.now },
  updatedAt: {
    type: Date,
    default: null,
  },
});

export default model("User", userSchema);
