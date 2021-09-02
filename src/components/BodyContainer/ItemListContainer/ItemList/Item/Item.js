import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../../../../context/CartContext";

function Item({ id, image, title, description, price, stock, categoryName, categoryId }) {
  const history = useHistory();
  //
  const [stockProduct, setStockProduct] = useState(stock);
  const [isFinishBuy, setIsFinishBuy] = useState(false);
  //
  const {addItem} = useContext(CartContext);
  //
  const actualizarStock = (nuevoStock)=>{
    setStockProduct(nuevoStock);
    const cantidad = stock - nuevoStock;
    //
    //const nuevoItem = new ItemSeleccionado(id,titulo,costo,cantidad);
    const nuevoItem = { id,title,price,cantidad  }
    addItem(nuevoItem);
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
          <small><strong>Categoría:</strong> {categoryName} - {categoryId.categoryTitle}</small>
        </Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Header className="headerCard">
          <small>Servicios disponibles para este mes: {stockProduct}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="comprar">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="footerCard">
          <small className="text-muted">Costo: S/. {price}</small>
        </Card.Footer>
        {!isFinishBuy ? <ItemCount stock={stockProduct} handlerStock={actualizarStock} handlerFinishBuy={finishBuy} />:<Button className="botonTerminarCompra borde-sin-curva" onClick={goToCart}>Terminar la Compra</Button>}
        <ItemDetailContainer id={id}/>
      </Card>
    </div>
  );
}

export default Item;
