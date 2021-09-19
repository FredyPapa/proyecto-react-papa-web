import { Button, Modal } from "react-bootstrap";

export default function ItemDetail({onDetail, stateModal, onClose, title, image, description, price, categoryName}){
    return(
    <>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={onDetail} className="btn btn-primary borde-sin-curva">Ver detalle del servicio</Button>
      </div>

      <Modal show={stateModal} onHide={onClose}>
        <Modal.Header closeButton className="estilo-popup">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Categoría: </strong>{categoryName}</p>
          <img src={image} alt={title} className="img-fluid"/>
          <p>{description}</p>
          <p align="right"><strong>Costo: S/. {price}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose} className="btn btn-danger">Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}