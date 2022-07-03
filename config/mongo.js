const mongoose = require("mongoose");

const dbConnect = () => {
  // Se declara la conexión a la base de datos
  const DB_URI = process.env.DB_URI;
  // Se indica a mongoose doinde debe conectar y los parametros a usar
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Devuelve una función callback con un error o un a response
    },
    (error, response) => {
      if (!error) {
        console.log("Conectado con éxito");
      } else {
        console.log("Error de conexión");
      }
    }
  );
};

module.exports = dbConnect;
