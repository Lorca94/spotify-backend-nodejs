const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

//Se crea un objeto por cada middleware que se quiera aplicar
const validatorCreateItem = [
  check("name").exists().notEmpty().isLength({min: 5, max:20}),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateItem };