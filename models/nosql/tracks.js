const mongoose = require("mongoose");

const tracksSchema = new mongoose.Schema(
  // Se crea el modelo para las canciones
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      // TODO: Validación
      validate: {
        validator: (req) => {
          return true;
        },
        message: "Error_URL"
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
      mediaId: {
        type: mongoose.Types.ObjectId,
      },
    }
  },
  // Se indica que se creen las propiedades necesarias para manejar las marcas de tiempo
  // Nos registrará createdAt,updatedAt
  {
    timestamps: true,
    versionKey: false,
  }
);

// Se exporta un tipo de modelo moongose (colección, modelo)
module.exports = mongoose.model("tracks", tracksSchema);
