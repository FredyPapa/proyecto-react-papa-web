import React from "react";
import carrito from "../../../../imagenes/carrito.png";
import { DetailCart } from "../../../BodyContainer/Cart/DetailCart/DetailCart";
import { Button } from "react-bootstrap";

function CartWidget() {
  //
  const [showDetail, setShowDetail] = React.useState(false)
  //Mostrar Detalle de la Compra
  const showDetailCart = () =>{
    setShowDetail(true);
  }
  //Ocultar Detalle de la Compra
  const hideDetailCart = () =>{
    setShowDetail(false);
  }
  //
  return(
    <>
      <img alt="Carrito" src={carrito} width="80" height="80" onMouseOver={()=>showDetailCart()} />
      {showDetail?
      <div id="divDetailCart" className="resumenCompra" >
        <p align="right"><Button className="btn btn-danger" onClick={()=>hideDetailCart()}>Cerrar</Button></p>
        <DetailCart showButtons="false"/>
      </div>
      :null}
    </>
  );
}

export default CartWidget;
