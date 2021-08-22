import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { useHistory } from "react-router-dom";

function Item({ id, imagen, titulo, descripcion, costo, stock, tituloCategoria }) {
  const history = useHistory();
  //
  const [stockProduct, setStockProduct] = useState(stock);
  const [isFinishBuy, setIsFinishBuy] = useState(false);
  //
  const actualizarStock = (nuevoStock)=>{
    setStockProduct(nuevoStock);
  };
  //
  const finishBuy = (isFinishBuy) =>{
    setIsFinishBuy(isFinishBuy);
  }
  //
  const goToCart = () =>{
    history.push({pathname:'/carrito'});
  }
  //
  return (
    <div className="margenesContenido">
      <Card className="estiloCard">
        <Card.Header className="headerCardCategory">
          <small><strong>Categoría:</strong> {tituloCategoria}</small>
        </Card.Header>
        <Card.Img variant="top" src={imagen} />
        <Card.Header className="headerCard">
          <small>Servicios disponibles para este mes: {stockProduct}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="comprar">{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer className="footerCard">
          <small className="text-muted">{costo}</small>
        </Card.Footer>
        {!isFinishBuy ? <ItemCount stock={stockProduct} handlerStock={actualizarStock} handlerFinishBuy={finishBuy} />:<Button className="botonTerminarCompra borde-sin-curva" onClick={goToCart}>Terminar la Compra</Button>}
        <ItemDetailContainer id={id}/>
      </Card>
    </div>
  );
}

export default Item;
