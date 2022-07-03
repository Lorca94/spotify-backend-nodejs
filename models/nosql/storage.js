const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema(
  // Se crea el modelo de almacenamiento
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
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
module.exports = mongoose.model("storages", storageSchema);
