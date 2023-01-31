import mongoose from "mongoose";
import User from "./User.js";

const { Schema, model, SchemaTypes } = mongoose;

const favoriteSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User,
  },
  uri: {
    type: SchemaTypes.String,
    required: true,
  },
  label: {
    type: SchemaTypes.String,
    required: true,
  },
  image: {
    type: SchemaTypes.String,
    required: true,
  },
  dishType: {
    type: SchemaTypes.Array,
    default: [],
    required: true,
  },
  mealType: {
    type: SchemaTypes.Array,
    default: [],
    required: true,
  },
  ingredients: {
    type: SchemaTypes.Array,
    default: [],
    required: true,
  },
  totalNutrients: {
    type: Object,
    default: {},
    required: true,
  },
  dateCreated: { type: Date, immutable: true, default: Date.now },
  updatedAt: {
    type: Date,
    default: null,
  },
});

export default model("Favorite", favoriteSchema);
