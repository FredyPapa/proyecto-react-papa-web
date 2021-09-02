import React, { useContext } from "react";
import { CartContext} from '../../../context/CartContext';
import { DetailCart } from "./DetailCart/DetailCart";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Cart = () => {
    //
    const {items} = useContext(CartContext);
    //
    return (
        <div className="container">
            <h2 className="espacioTitulo">Detalle de la compra</h2>
            {
            items.length? <DetailCart></DetailCart> : 
            <>
                <h3 align="center">(No hay productos agregados al carrito)</h3><br/>
                <p align="center">
                    <NavLink to="/catalogo/P9cjMGN5oQiMtjhJwqAH">
                        <Button className="btn btn-success">Volver</Button>
                    </NavLink>
                </p>
            </>
            }
            <hr/>
        </div>
    );
}

export default Cart;


