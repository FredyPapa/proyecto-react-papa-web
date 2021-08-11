import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import Item from "./item";
import ImageLoading from "../../imagenes/cargando.gif";

function ItemList() {
  //Usando UseState
  const [isLoading,setIsLoading] = useState(true);
  //Arreglo con los servicios ofrecidos
  const servicios = [
    { id: "1", imagen: "http://www.h2tic.com/imagenes/desarrollo-aplicaciones-web.png", titulo: "Sitio Web - Pack 1", descripcion: "Sitio Web responsive con Wordpress, Hasta 5 páginas internas, Dominio y Hosting por un año.", costo: "Costo: S/.500.00", stock: "10" },
    { id: "2", imagen: "https://elitesystems.mx/wp-content/uploads/2017/02/usa.png", titulo: "Sitio Web - Pack 2", descripcion: "Sitio Web responsive con Wordpress, Hasta 10 páginas internas, Dominio y Hosting por un año.", costo: "Costo: S/.700.00", stock: "8" },
    { id: "3", imagen: "https://www.easyappcode.com/images/page-desarrollo-de-aplicaciones-web.jpg", titulo: "Sitio Web - Pack 3", descripcion: "Sitio Web responsive con Wordpress, uso del plugin de maquetación Elementor Pro, Hasta 10 páginas internas, Dominio y Hosting por un año.", costo: "Costo: S/.1,000.00", stock: "5" },
    { id: "4", imagen: "https://www.juangalera.com/wp-content/uploads/2017/03/sitio-web-importancia-imagen-destacada.png", titulo: "Sitio Web - Pack 4", descripcion: "Sitio Web responsive a medida con o sin Wordpress, uso del plugin de maquetación Elementor Pro (si opta por Wordpress), las páginas internas que necesite, Dominio y Hosting por un año.", costo: "Costo: S/.1,500.00", stock: "2" }
  ];
  //
  const task = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 2000);
    });
  task()
    .then(
      (result) => {
        setIsLoading(result);
      },
      (err) => console.log(err)
    )
    .finally(() => console.log("Proceso finalizado correctamente"));


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
      
        {isLoading ? <center><img alt="Cargando" src={ImageLoading}/></center>:<CardGroup>{renderData()}</CardGroup>}
      
    </div>
  );
}

export default ItemList;
