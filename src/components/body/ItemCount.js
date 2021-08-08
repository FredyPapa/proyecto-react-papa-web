import React from "react";
import { useState } from "react";
import { ButtonGroup, Button, Form } from "react-bootstrap";

function ItemCount({ stock, handler }) {
  //useState
  const [cantidad, setCantidad] = useState(0);
  const [stockProducto, setStockProducto] = useState(stock);
  //Aumentar cantidad
  const incrementarCantidad = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };
  //Disminuir cantidad
  const disminuirCantidad = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };
  //Al ingresar la cantidad manualmente
  const manejadorCantidadChange = (event) => {
    setCantidad(validar(parseInt(event.target.value)));
  };
  //Validar cantidad ingresada
  const validar = (cantidad) => {
    if (isNaN(cantidad)) {
      cantidad = 0;
    } else if (cantidad < 0) {
      cantidad = 0;
    } else if (cantidad > stock) {
      cantidad = stock;
    }
    return cantidad;
  };
  //Agregar al carrito
  const agregarCarrito = () => {
    if (cantidad > 0) {
      alert("Felicidades, su pedido se agregó al carrito. La cantidad solicitada fue " + cantidad);
      let nuevoStock = stock - cantidad;
      setCantidad(0);
      setStockProducto(nuevoStock);
      //llamamos a la función del componente padre enviando el nuevo stock
      handler(nuevoStock);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button
          className="btn-success borde-sin-curva"
          onClick={disminuirCantidad}
        >
          -
        </Button>
        <Form.Control
          type="text"
          placeholder="0"
          className="cajaTextoCantidad"
          value={cantidad}
          onChange={manejadorCantidadChange}
        />
        <Button
          className="btn-success borde-sin-curva"
          onClick={incrementarCantidad}
        >
          +
        </Button>
      </ButtonGroup>
      <Button className="botonComprar borde-sin-curva" onClick={agregarCarrito}>
        Comprar
      </Button>
    </>
  );
}

export default ItemCount;
