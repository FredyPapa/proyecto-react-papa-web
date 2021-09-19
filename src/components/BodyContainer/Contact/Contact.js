import React from "react";
import contactenos from "../../../imagenes/contactenos.jpg";

const Contact = () => {
  return (
    <div>
      <div>
        <h2 className="espacioTitulo">Contáctenos</h2>
        <p className="espacioDescripcion">Para mayor información contacte con un especialista en Papa-Web.</p>
        <p align="center">
          <img src={contactenos} alt="Papa Web Store" className="img-fluid"/>
        </p>
        <br/>
      </div>
    </div>
  );
};

export default Contact;