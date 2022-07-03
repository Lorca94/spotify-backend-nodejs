const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator')


/**
 * Obtener una lista de la BBDD
 * @param {} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try{
    const data = await tracksModel.find({});
    res.send({ data });

  } catch(e) {
    handleHttpError(res, 'Cannot get items');
  }
};

/**
 * Obtener un objeto de la BBDD
 * @param {} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Crear un registro la BBDD
 * @param {} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try{
    // Obtiene el el cuerpo de la response limpio, es decir, solamente pasa los datos que se le piden, de tal forma si alguien
    // intenta introducir en db un dato innecesario no lo recibirá.
    const body = matchedData(req)
    // Se insera en db
    const data = await tracksModel.create(body);
    // Se envía response
    res.send({ data });

  } catch(e) {
    // Se lanza error
    handleHttpError(res, 'ERROR_CANNOT_CREATE_ITEM'); 
  }
};

/**
 * Actualizar un registro la BBDD
 * @param {} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro la BBDD
 * @param {} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
