
import { CardGroup } from "react-bootstrap";
import Item from "./Item";


function ItemList({servicios}) {
  //Función de renderizado de la data
  const renderData = () =>{
    return servicios?.map((servicio) =>(
      <Item key={servicio.id} {...servicio} />
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
