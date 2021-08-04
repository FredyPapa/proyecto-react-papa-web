import React from "react";
import carrito from "../../imagenes/carrito.png";

function CartWidget() {
  return <><img alt="Carrito" src={carrito} width="80" height="80" /><span className="comprar">Comprar</span></>;
}

export default CartWidget;
