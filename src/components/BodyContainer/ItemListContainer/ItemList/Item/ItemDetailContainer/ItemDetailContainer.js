import { useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import ImageLoading from "../../../../../../imagenes/loading.gif";

import { getFirestore } from "../../../../../../firebase";

function ItemDetailContainer({id}) {
  //Usando UseState
  const [itemService, setItemService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  //Al pulsar click en el botón Ver detalle
  const handleDetailClick = () =>{
    setIsLoading(true);
    const db = getFirestore();
    const servicesCollection = db.collection("services");
    const currentItem = servicesCollection.doc(id);
    //
    //Obtenemos el documento
    currentItem
    .get().then(document => {
        if(!document.exists){
            console.log("No item");
            return;
        }
        setItemService({id:document.id, ...document.data()});
    })
    .finally(()=>{
        setIsLoading(false);
        setShow(true);
    });
  }
  //
  const handleClose = () => setShow(false);
  //
  return (
    <div>
      {isLoading ? <p align="center"><img alt="Cargando" src={ImageLoading}/></p>:<ItemDetail onDetail={handleDetailClick} onClose={handleClose} {...itemService} stateModal={show}/>}
    </div>
  );
}

export default ItemDetailContainer;