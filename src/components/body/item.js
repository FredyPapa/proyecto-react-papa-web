import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import ItemCount from "./ItemCount";

function Item({ imagen, titulo, descripcion, costo, stock }) {
  //
  const [stockProducto, setStockProducto] = useState(stock);
  //
  const actualizarStock = (nuevoStock)=>{
    setStockProducto(nuevoStock);
  };
  //
  return (
    <div className="margenesContenido">
      <Card className="estiloCard">
        <Card.Img variant="top" src={imagen} />
        <Card.Header className="headerCard">
          <small>Servicios disponibles para este mes: {stockProducto}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="comprar">{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer className="footerCard">
          <small className="text-muted">{costo}</small>
        </Card.Footer>
        <ItemCount stock={stockProducto} handler={actualizarStock} />
      </Card>
    </div>
  );
}

export default Item;
