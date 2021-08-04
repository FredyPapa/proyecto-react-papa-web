import React from "react";
import { Card } from "react-bootstrap";

function ItemContainer({imagen, titulo, descripcion, costo}) {
  return (
    <div className="margenesContenido">
      <Card className="anchoCard">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="comprar">{titulo}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{costo}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ItemContainer;
