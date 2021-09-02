import React, { useEffect, useState } from 'react'
import { getFirestore } from "../firebase";

const itemId="JHNpSqR2QJhPYwouqvIh";

export const ItemListFB = () => {
    //
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [itemsWithHighPrice, setItemsWithHighPrice] = useState([]);
    const [loading, setLoading] = useState(false);
    //
    console.log("items",items);
    console.log("item",item);
    console.log("itemsWithHighPrice",itemsWithHighPrice);
    //
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const currentItem = itemCollection.doc(itemId);
        const highgPrice = itemCollection.where("price",">",3000);
        //Llamando a una colección (a todos los documentos)
        itemCollection
            .get()
            .then((querySnapshot) =>{
                if(querySnapshot===0){
                    console.log("No items");
                }
                setItems(
                    querySnapshot.docs.map((document)=>({id: document.id, ...document.data()}))
                );
            })
            .catch((error) => console.log(error))
            .finally(()=>setLoading(false));
        //Llamando a un documento (un item de la colección)
        currentItem
            .get().then(document => {
                if(!document.exists){
                    console.log("No item");
                    return;
                }
                setItem({id:document.id, ...document.data()});
            });
        //Llamando a documentos según filtro aplicado
        highgPrice
            .get()
            .then((querySnapshot) => 
                    setItemsWithHighPrice(querySnapshot.docs.map((document) => document.data())
                )
            )
            .catch((error) => console.log("error",error));
    }, [])
    //
    return (
        <div>
            <center>
                {loading && <h1>Loading...</h1>}
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.title} - cantidad: {item.stock}
                        </li>
                    ))}
                </ul>
            </center>
        </div>
    )
}
