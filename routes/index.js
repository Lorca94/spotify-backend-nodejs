const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

/**
 * Elimina la referencia que indica que el tipo de archivo que se le pasa.
 * @param {string} fileName
 * @returns
 */
const removeExtension = (fileName) => {
  // Devuelve el nombre del archivo sin el tipo de archivo
  return fileName.split(".").shift();
};

//  Obtiene los nombre de los archivos, al tener definido el nombre de archivo como nombre
// de ruta lo volvemos dinámico
fs.readdirSync(PATH_ROUTES).filter((file) => {
  // Se elimina la extensión del archivo
  const name = removeExtension(file);
  // No interesa index así que...
  if (name !== "index") {
    // Aquí recibe 'http:localhost/api' ---> Se le introduce otro '/{nombre del archivo}'
    // A continuación se le indica que utilice el archivo correspondiente
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
