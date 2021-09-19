import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    //
    const [items, setItems] = useState([]);
    //Agregar Item
    const addItem = (item) => {
        //const newItems = [...items, item];
        //setItems(newItems);
        //Validar si existe el item
        const itemBuscado = items.filter(itemBase => itemBase.id === item.id);
        //Si no existe lo agregamos
        if(itemBuscado.length===0) setItems([...items, item]);
        //caso contrario incrementamos la cantidad
        else itemBuscado[0].cantidad += item.cantidad;
    };
    //Remover Item
    const removeItem = (id) =>{
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }
    //Limpiar carrito
    const clearAllItems = ()=>{
        setItems([]);
    }
    //
    return(
        <CartContext.Provider value={{items, addItem, removeItem, clearAllItems}}>
            {children}
        </CartContext.Provider>
    );
}