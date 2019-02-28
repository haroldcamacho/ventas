class servicio {

    constructor(){
        this.nombre = "";
        this.precio = 0;
    }

    estaDisponible(cantidad) {
        return score;
    }
    calcularTarifa(){

    }
}

class articulo{
    constructor(){
        this.nombre = "";
        this.precio = 0;
        this.saldo=0;
    }
    estaDisponible(cantidad) {
        return score;
    }
    calcularTarifa(){

    }
}


   calcularTotal(cantidad) {
        let total=0;
        /*this.carritoDeCompras.forEach(funcrion(producto){
               total+=producto.calcularTarifa();
        });*/
    }
    anhadirProductoAlCarrito(producto, cantidad){
        if (producto.estaDisponible(cantidad))
        {
            this.carritoDeCompras.push(producto);
        }
    }