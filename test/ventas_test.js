var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../ventas.js';

describe('Venta',function(){
    it('total de venta sin productos deberia devolver 0',function(){
        let venta=new Venta();
        expect(venta.total()).equal(0);
    });
    it('total de venta con un producto deberia devolver',function(){
        /*let venta=new Venta();
        let mantenimiento= new servicio("Mantenimiento",10);
        venta.add(mantenimiento,1);
        expect(venta.total()).equal(115);*/
    });
});