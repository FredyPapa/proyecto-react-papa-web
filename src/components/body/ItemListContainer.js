import React from "react";
import { CardGroup } from "react-bootstrap";
import ItemContainer from "./itemContainer";

function ItemListContainer() {
  return (
    <div className="margenesContenido">
      <CardGroup>
        <ItemContainer
          imagen="http://www.h2tic.com/imagenes/desarrollo-aplicaciones-web.png"
          titulo="Sitio Web - Pack 1"
          descripcion="Sitio Web responsive con Wordpress, Hasta 5 páginas internas, Dominio y Hosting por un año."
          costo="Costo: S/.500.00"
        />
        <ItemContainer
          imagen="https://elitesystems.mx/wp-content/uploads/2017/02/usa.png"
          titulo="Sitio Web - Pack 2"
          descripcion="Sitio Web responsive con Wordpress, Hasta 10 páginas internas, Dominio y Hosting por un año."
          costo="Costo: S/.700.00"
        />
        <ItemContainer
          imagen="https://www.easyappcode.com/images/page-desarrollo-de-aplicaciones-web.jpg"
          titulo="Sitio Web - Pack 3"
          descripcion="Sitio Web responsive con Wordpress, uso del plugin de maquetación Elementor Pro, Hasta 10 páginas internas, Dominio y Hosting por un año."
          costo="Costo: S/.1000.00"
        />
        <ItemContainer
          imagen="https://www.comunicare.es/wp-content/uploads/2021/02/como-crear-pagina-web-mejores-programas-disponibles-730x485-977425330.png"
          titulo="Sitio Web - Pack 4"
          descripcion="Sitio Web responsive a medida con o sin Wordpress, uso del plugin de maquetación Elementor Pro (si opta por Wordpress), las páginas internas que necesite, Dominio y Hosting por un año."
          costo="Costo: S/.1,500.00"
        />
      </CardGroup>
    </div>
  );
}

export default ItemListContainer;
