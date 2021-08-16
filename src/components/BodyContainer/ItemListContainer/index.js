import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ImageLoading from "../../../imagenes/loading.gif";

import servicios from "../../../data/services.json";

function ItemListContainer() {
  //Usando UseState
  const [listaServicios,setListaServicios] = useState();
  const [isLoading,setIsLoading] = useState(true);
  //UseEffect que se ejecuta una sola vez
  useEffect(()=>{
    //Promesa
    const task = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(servicios);
      }, 2000);
    });
    task()
    .then(
      (result) => {
        setIsLoading(false);
        setListaServicios(result);
      },
      (err) => console.log(err)
    )
    .finally(() => console.log("Proceso finalizado correctamente"));
  },[]);
  //
  return (
    <div>
      <h2 className="margenesContenido">Catálogo de Servicios</h2>
      {isLoading ? <p align="center"><img alt="Cargando" src={ImageLoading}/></p>:<ItemList servicios={listaServicios}/>}
    </div>
  );
}

export default ItemListContainer;