const multer = require('multer');

const storage = multer.diskStorage({
  // destination tiene como argumentos:
  // req => request
  // file => archivo
  // callback => función de callback(error, destino del archivo)
  destination: function(req, file, callback) {
    // Se indica el destino del archivo
    const pathStorage = `${__dirname}/../storage`;

    callback(null, pathStorage);
  },
  // filename tiene como argumentos:
  // req => request
  // file => archivo
  // callback => función de callback(error, destino del archivo)
  filename: function(req, file, callback) {
    // Se obtiene extensión usando pop para utilizar el último valor del array
    const ext = file.originalname.split('.').pop();
    // Asigna un nombre aleatoria
    const filename =`file-${Date.now()}.${ext}`;

    callback(null, filename);
  }
});

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware;