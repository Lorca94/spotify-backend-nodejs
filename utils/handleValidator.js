const { validationResult } = require('express-validator');

// Se validan los datos obtenidos
const validateResults = (req, res, next) => {
  try{
    validationResult(req).throw();
    return next();
  } catch (err) {
    // En caso de error devuelve un HTTPRes403 y se manda por pantalla como response el error. 
    res.status(403);
    res.send({ errors: error.array() })
  }
};

module.exports = validateResults;