import { useState } from "react";
import ItemDetail from "./ItemDetail";
import ImageLoading from "../../../../../../imagenes/loading.gif";

import servicios from "../../../../../../data/services.json";

function ItemDetailContainer({id}) {
  //Usando UseState
  const [itemService,setItemService] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  //Al pulsar click en el botón Ver detalle
  const handleDetailClick = () =>{
    //Promesa
    const task = (id) =>
    new Promise((resolve, reject) => {
      setIsLoading(true);
      setTimeout(() => {
        const searchId = servicios.find(servicio => servicio.id === id); 
        resolve(searchId);
      }, 2000);
    });
    task(id)
    .then(
      (result) => {
        setIsLoading(false);
        setItemService(result);
        setShow(true);
      },
      (err) => console.log(err)
    )
    .finally(() => console.log("Item filtrado correctamente"));
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