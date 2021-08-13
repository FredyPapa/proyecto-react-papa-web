
import { CardGroup } from "react-bootstrap";
import Item from "./item";


function ItemList({servicios}) {
  //Función de renderizado de la data
  const renderData = () =>{
    return servicios?.map((servicio,index) =>(
      <Item 
        key={index}
        imagen={servicio.imagen}
        titulo={servicio.titulo}
        descripcion={servicio.descripcion}
        costo={servicio.costo}
        stock={servicio.stock}
      />
  ));
  };
  //
  return (
    <div className="margenesContenido">
      <CardGroup>{renderData()}</CardGroup>
    </div>
  );
}

export default ItemList;
