import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    //
    const [items, setItems] = useState([]);
    //Agregar Item
    const addItem = (item) => {
        /*if(items.length===0){
            setItems(item);
            console.error("primer item");
        }else{
            setItems([...items, item]);  
            console.error("otro item");
        }*/
        //const newItems = [...items, item];
        //setItems(newItems);
        setItems([...items, item]);
        console.log(items);
      };
    //Remover Item
    const removeItem = (id) =>{
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }
    //Limpiar carrito
    const clearAllItems = ()=>setItems([]);
    //
    return(
        <CartContext.Provider value={{addItem, removeItem, clearAllItems}}>
            {children}
        </CartContext.Provider>
    );
}