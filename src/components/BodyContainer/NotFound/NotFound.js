import React from "react";
import p404 from "../../../imagenes/404.jpg";

const NotFound = () => {
  return (
    <div>
      <div>
        <h2 className="espacioTitulo">No se encontró la Página</h2>
        <p className="espacioDescripcion">Se detectó un error 404.</p>
        <p align="center">
          <img src={p404} alt="Papa Web Store" className="img-fluid"/>
        </p>
        <br/>
      </div>
    </div>
  );
};

export default NotFound;