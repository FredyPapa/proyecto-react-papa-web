import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { getFirestore } from "../../../../firebase";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const DetailCart = ({showButtons}) => {
    console.log("showButtons",showButtons);
    //
    const {items, removeItem, clearAllItems} = useContext(CartContext);
    //
    const [total, setTotal] = useState(0);
    const [orderCreatedId, setOrderCreatedId] = useState(null);
    //
    useEffect(() => {
        if (items.length > 0) {
          let currentTotal = 0;
          items.forEach((item) => {
            currentTotal += item.price * item.cantidad;
          });
          setTotal(currentTotal);
        }
      }, [items]);
    //
    const renderData = () =>{
        return items?.map((item) =>(
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.cantidad}</td>
                <td>{(item.price)*(item.cantidad)}</td>
                <td><Button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</Button></td>
            </tr>
        ));
    };
    //Calcular Total
    const calculateTotalPrice = () =>{
        let totalItem = 0;
        let totalPagar = 0;
        for (const item of items) {
            totalItem = item.price * item.cantidad;
            totalPagar+=totalItem;
        }
        return totalPagar;
    }
    //Finalizar la compra
    const handleFinishPurchase = () => {
        const newItems = items.map((item) => ({
            item: {
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.cantidad
            }
          }));
          console.log("newItems", newItems);
          const newOrder = {
            buyer: {
              name: "Fredy",
              phone: "999999999",
              email: "fpapa@gmail.com",
            },
            items: newItems,
            date: new Date(),
            total
          };
          console.log(newOrder);
          //
          const db = getFirestore();
          const orders = db.collection("orders");
          const batch = db.batch();
          //
          orders
            .add(newOrder)
            .then((response) => {
                console.log("response", response);
                items.forEach(( item) => {
                const docRef = db.collection("services").doc(item.id);
                batch.update(docRef, { stock: item.stock - item.cantidad });
                });
                batch.commit();
                setOrderCreatedId(response.id);
            })
            .catch((error) => console.log(error));
    }
    //
    return (
        <div>
            {!orderCreatedId ? 
                <div>
                <table className="table table-hover">
                    <thead className="bg-success text-white">
                        <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Costo (S/.)</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3"><strong>TOTAL A PAGAR</strong></td>
                            <td><strong>{calculateTotalPrice()}</strong></td>
                        </tr>
                    </tfoot>
                </table>
                {showButtons==="true"?
                <div className="d-grid gap-2">
                    <Button className="btn btn-danger" onClick={()=>clearAllItems()}>Eliminar todo</Button>
                    <Button className="btn btn-primary" onClick={handleFinishPurchase}>Comprar</Button>
                </div>
                :null}
                </div>
                :
                <div>
                    <h3 align="center">Felicitaciones...</h3>
                    <p align="center">Su compra fue realizada con éxito... Se generó la orden de compra con Id: <strong>{orderCreatedId}</strong></p>
                    <p align="center">
                    <NavLink to="/catalogo/P9cjMGN5oQiMtjhJwqAH">
                        <Button className="btn btn-success" onClick={()=>clearAllItems()}>Volver</Button>
                    </NavLink>
                </p>
                </div>
                
            }
        </div>
    )
}
