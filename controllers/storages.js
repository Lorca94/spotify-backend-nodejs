const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener una lista de la BBDD
 * @param {} req 
 * @param {*} res 
 */
 const getItems = async(req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
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
 const createItem = async(req, res) => {
  // Se obtienen los datos de file
  const { file } = req;
  // Se obtienen los dados del body
  const { body } = req;
  // console.log(file);
  // console.log(body);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  }
  // Se crea registro en db
  const data = await storageModel.create(fileData);
  res.send({ data });
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
 
 
 module.exports = { getItems, getItem, createItem, updateItem, deleteItem }