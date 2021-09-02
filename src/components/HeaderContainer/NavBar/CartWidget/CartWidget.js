import React from "react";
import carrito from "../../../../imagenes/carrito.png";
import { DetailCart } from "../../../BodyContainer/Cart/DetailCart/DetailCart";
import { Button } from "react-bootstrap";

function CartWidget() {
  //Mostrar Detalle de la Compra
  const showDetailCart = () =>{
    document.getElementById("divDetailCart").style.display="";
  }
  //Ocultar Detalle de la Compra
  const hideDetailCart = () =>{
    document.getElementById("divDetailCart").style.display="none";
  }
  //
  return(
    <>
      <img alt="Carrito" src={carrito} width="80" height="80" onMouseOver={()=>showDetailCart()} />
      <div id="divDetailCart" className="resumenCompra" >
        <p align="right"><Button className="btn btn-danger" onClick={()=>hideDetailCart()}>Cerrar</Button></p>
        <DetailCart/>
      </div>
    </>
  );
}

export default CartWidget;
