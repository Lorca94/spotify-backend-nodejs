const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  // Se crea el modelo de usuario
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  // Se indica que se creen las propiedades necesarias para manejar las marcas de tiempo
  // Nos registrará createdAt,updatedAt
  {
    timestamps: true,
    versionKey: false,
  }
);

// Se exporta un tipo de modelo moongose (colección, modelo)
module.exports = mongoose.model("users", userSchema);
