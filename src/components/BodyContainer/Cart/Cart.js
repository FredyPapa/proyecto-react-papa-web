import React, { useContext } from "react";
import carritoPapaWeb from '../../../imagenes/comprar-papa-web.jpg';
import { CartContext

} from '../../../context/CartContext';

export const Cart = () => {
    //
    const {items} = useContext(CartContext);
    console.log(items);
    //
    const renderData = () =>{
        return items?.map((item) =>(
            <p>{items.titulo}</p>
        ));
    };
    //
    return (
        <div>
            <p align='center'><img alt="Carrito-Papa-Web" src={carritoPapaWeb} /></p>
            {renderData()}
        </div>
        
    );
}

export default Cart;


