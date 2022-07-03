const express = require('express');
const { getItems, getItem, createItem, deleteItem } = require('../controllers/tracks');
const { validatorCreateItem } = require('../validators/track');


const router = express.Router();

// TODO: Métodos get post, delete, put para los modelos Tracks
router.get('/', getItems);
//router.get('/:id', getItem);
router.post('/', validatorCreateItem, createItem);
//router.put('/:id', createItem);
//router.delete('/:id', deleteItem);



module.exports = router;
