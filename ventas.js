
class Venta{
    constructor(){
        this.carritoDeCompras=new Array();
    }

    agregarAlCarrito(producto,cantidad){
        let venta={
            prod:producto,
            cant:cantidad
        };
        this.carritoDeCompras.push(venta);
    }
 
    total(){
        let total=0;
        if(this.carritoDeCompras.length>0){
        this.carritoDeCompras.forEach(function(item){
            const producto=item.prod;
            const cantidad=item.cant;
            total+=producto.precio*cantidad;
        });
        }
        return total;
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
    constructor(nombre,precio){
        super(nombre,precio);
    }
}

module.exports =  { Venta, Servicio, Producto, Articulo }