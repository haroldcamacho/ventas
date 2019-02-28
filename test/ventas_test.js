var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var departamentoVentas = require('../ventas.js');
describe('Venta', function () {
    let venta;

    beforeEach(function () {
        venta = new departamentoVentas.Venta();
    });

    it('calcularTotal de venta sin productos deberia devolver 0', function () {
        expect(venta.calcularTotal()).equal(0);
    });
    it('calcularTotal de venta con un servicio deberia devolver', function () {
        let mantenimiento = new departamentoVentas.Servicio("Mantenimiento", 115);
        venta.agregarAlCarrito(mantenimiento, 1);
        expect(venta.calcularTotal()).equal(115);
    });
    it('calcularTotal de venta con un producto deberia devolver', function () {
        let monitor = new departamentoVentas.Servicio("Monitor32Pulgadas", 400);
        venta.agregarAlCarrito(monitor, 1);
        expect(venta.calcularTotal()).equal(400);
    });

    it('calcularTotal de venta con un producto y un servicio deberia devolver', function () {
        let mantenimiento = new departamentoVentas.Servicio("Mantenimiento", 115);
        let monitor = new departamentoVentas.Producto("Monitor32Pulgadas", 400);
        venta.agregarAlCarrito(mantenimiento, 1);
        venta.agregarAlCarrito(monitor, 1);
        expect(venta.calcularTotal()).equal(515);
    });
});