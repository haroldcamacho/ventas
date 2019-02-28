
class Venta{
    constructor(){
        this.carritoDeCompras=new Array;
    }

    agregarAlCarrito(item){
        this.carritoDeCompras.push(item);
    }
 
    total(){
        return 0;
    }

}

class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

class Servicio extends Producto{
    constructor(nombre,precio){
        super(nombre,precio);
    }
}


class Articulo extends Producto{
    constructor(){

    }
}

module.exports =  { Venta, Servicio, Producto, Articulo }