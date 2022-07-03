const express = require('express');
const { createItem } = require('../controllers/storages');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');

// Ruta: http://localhost:3000/api/storage
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;