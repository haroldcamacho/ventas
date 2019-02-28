var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var departamentoVentas= require('../ventas.js');

describe('Venta',function(){
    it('total de venta sin productos deberia devolver 0',function(){
        let venta=new departamentoVentas.Venta();
        expect(venta.total()).equal(0);
    });
    it('total de venta con un producto deberia devolver',function(){
        let venta=new departamentoVentas.Venta();
        let mantenimiento= new departamentoVentas.Servicio("Mantenimiento",115);
        venta.agregarAlCarrito(mantenimiento,1);
        expect(venta.total()).equal(115);
    });
});