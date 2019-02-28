class Venta {
    constructor() {
        this.carritoDeCompras = new Array();
    }

    agregarAlCarrito(producto, cantidad) {
        let venta = {
            prod: producto,
            cant: cantidad
        };
        this.carritoDeCompras.push(venta);
    }

    calcularTotal() {
        let calcularTotal = 0;
        this.carritoDeCompras.forEach(function (item) {
            const producto = item.prod;
            const cantidad = item.cant;
            calcularTotal += producto.precio * cantidad;
        });
        return calcularTotal;
    }
}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    estaDisponible(cantidad) {
        if (cantidad > 999)
            return false;
        return true;
    }
    calcularTarifa(cantidad) {
        return (this.precio * cantidad);
    }
}

class Servicio extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
}

class Articulo extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
}

module.exports = {
    Venta,
    Servicio,
    Producto,
    Articulo
}