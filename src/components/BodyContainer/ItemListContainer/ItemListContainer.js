import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ImageLoading from "../../../imagenes/loading.gif";

import { getFirestore } from "../../../firebase";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const {categoryId} = useParams();
  
  //Usando UseState
  const [listaServicios,setListaServicios] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  //
  //UseEffect que se ejecuta una sola vez
  useEffect(()=>{
    //console.log("categoryId",categoryId);
    setIsLoading(true);

    const db = getFirestore();
    //const servicesCollection = db.collection("services");
    const categoryDocRef = db.collection('categories').doc(categoryId);
    const servicesForCategory = db.collection('services').where('categoryId', '==', categoryDocRef);
    //
    //Consultando por categoría seleccionada
    servicesForCategory
            .get()
            .then((querySnapshot) => 
                    setListaServicios(querySnapshot.docs.map((document)=>({id: document.id, ...document.data()}))
                )
            )
            .catch((error) => console.log("error",error))
            .finally(()=>setIsLoading(false));

  },[categoryId]);
  //
  return (
    <div>
      <h2 className="margenesContenido">Catálogo de Servicios</h2>
      {isLoading ? <p align="center"><img alt="Cargando" src={ImageLoading}/></p>:<ItemList servicios={listaServicios}/>}
    </div>
  );
}

export default ItemListContainer;