// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);
// Consultar todos los productos
router.get('/', productoController.obtenerProductos);
// Update un producto mandandole el id
router.put('/:id', productoController.actualizarProducto);
// Consultar un solo producto mandandole el id
router.get('/:id', productoController.obtenerProducto);
// Borrar un producto mandandole el id
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;