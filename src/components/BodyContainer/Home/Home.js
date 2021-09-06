import React from "react";
import papaWebStore from "../../../imagenes/papa-web-store.jpg";

const Home = () => {
  return (
    <div>
      <h2 className="espacioTitulo">Bienvenido</h2>
      <p className="espacioDescripcion">Te ofrecemos una gran variedad de servicios tecnológicos para que puedas hacer crecer tu negocio.</p>
      <p align="center">
        <img src={papaWebStore} alt="Papa Web Store" className="img-fluid"/>
      </p>
      <p align="center">Puedes consultar nuestros servicios o contactar con un especialista para mayor detalle.</p>
      <p align="center">No pierdas la oportunidad de automatizar los procesos de tu organización.</p>
    </div>
  );
};

export default Home;