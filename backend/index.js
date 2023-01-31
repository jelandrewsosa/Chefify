import * as dotenv from "dotenv";
import express from "express";
import axios from "axios";
import mongoose from "mongoose";
import process from "node:process";
import cors from "cors";
import helmet from "helmet";
import userRoute from "./routes/user.js";
import recipesRoute from "./routes/recipe.js"
import favoriteRoute from "./routes/favorite.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.set('port', PORT);

// routes
app.use('/users', userRoute);
app.use('/recipes', recipesRoute);
app.use('/favorites', favoriteRoute)

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
