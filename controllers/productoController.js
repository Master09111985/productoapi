const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        // Creamos nuestro producto.
        producto = new Producto(req.body);
        // Guardamos el producto
        await producto.save();
        res.send(producto);
    } catch (error){
        console.log(error);
        res.status(500).send('Existe un error al intentar guardar el producto');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error al tratar de consultar los productos');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        // Consultamos el producto por el id.
        let producto = await Producto.findById(req.params.id);
        // Si no hay producto.
        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        // Actualizar el producto
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new:true });
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error al intentar actualizar el producto');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        // Consultamos el producto por el id.
        let producto = await Producto.findById(req.params.id);
        // Si no hay producto.
        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error al intentar consultar el producto');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        // Consultamos el producto por el id.
        let producto = await Producto.findById(req.params.id);
        // Si no hay producto.
        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        
        await Producto.findOneAndDelete({ _id: req.params.id });

        res.json({ msg: 'Producto eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error al intentar eliminar el producto');
    }
}