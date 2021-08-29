import { Button, Modal } from "react-bootstrap";

export default function ItemDetail({onDetail, stateModal, onClose, titulo, imagen, descripcion, costo, tituloCategoria}){
    return(
    <>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={onDetail} className="btn btn-primary borde-sin-curva">Ver detalle del servicio</Button>
      </div>

      <Modal show={stateModal} onHide={onClose}>
        <Modal.Header closeButton className="estilo-popup">
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Categoría: </strong>{tituloCategoria}</p>
          <img src={imagen} alt={titulo} className="img-fluid"/>
          <p>{descripcion}</p>
          <p align="right"><strong>{costo}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose} className="btn btn-danger">Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}