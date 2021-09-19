import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { getFirestore } from "../../../../firebase";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import buySuccess from "../../../../imagenes/comprar-papa-web.jpg";

export const DetailCart = ({showButtons}) => {
    console.log("showButtons",showButtons);
    //
    const {items, removeItem, clearAllItems} = useContext(CartContext);
    //
    const [total, setTotal] = useState(0);
    const [orderCreatedId, setOrderCreatedId] = useState(null);
    //
    const [buyer, setBuyer] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        emailCheck: ''
      });

    const { name, surname, phone, email, emailCheck } = buyer;

    const isDiabledBuyButton = !(name && surname && phone && email && emailCheck);

    const handleChange = event => {
        setBuyer({ ...buyer, [event.target.name]: event.target.value });
    };

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
        if(buyer.email === buyer.emailCheck){
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
                  name: buyer.name,
                  surname: buyer.surname,
                  phone: buyer.phone,
                  email: buyer.email,
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
        }else{
            alert("El correo ingresado en los 2 campos no coinciden. Favor de validar.")
        }
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
                    <input id="txtNombre" name="name" type="text" className="form-control" placeholder="Nombres" onChange={handleChange} value={name}/>
                    <input id="txtApellidos" name="surname" type="text" className="form-control" placeholder="Apellidos" onChange={handleChange} value={surname}/>
                    <input id="txtTelefono" name="phone" type="text" minLength="9" maxLength="9" className="form-control" placeholder="Telefono" onChange={handleChange} value={phone}/>
                    <input id="txtCorreo" name="email" type="email" className="form-control" placeholder="Correo electrónico" onChange={handleChange} value={email}/>
                    <input id="txtCorreoVerificacion" name="emailCheck" type="email" className="form-control" placeholder="Repetir el Correo electrónico" onChange={handleChange} value={emailCheck}/>
                    <Button className="btn btn-primary" onClick={handleFinishPurchase} disabled={isDiabledBuyButton} >Comprar</Button>
                </div>
                :null}
                </div>
                :
                <div>
                    <h3 align="center">Felicitaciones, Sr(a) {name} {surname}...</h3>
                    <p align="center">Su compra fue realizada con éxito... Se generó la orden de compra con Id: <strong>{orderCreatedId}</strong></p>
                    <p align="center">Pronto nos pondremos en contacto con Ud. al teléfono {phone} y al correo {email} registrados.</p>
                    <p align="center">
                        <img alt="Compra exitosa" src={buySuccess} />;
                    </p>
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
