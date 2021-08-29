import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Button } from "react-bootstrap";

export const DetailCart = () => {
    //
    const {items, removeItem, clearAllItems} = useContext(CartContext);
    //
    const renderData = () =>{
        return items?.map((item) =>(
            <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.costo}</td>
                <td>{item.cantidad}</td>
                <td>{(item.costo)*(item.cantidad)}</td>
                <td><Button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</Button></td>
            </tr>
        ));
    };
    //Calcular Total
    const calculateTotalPrice = () =>{
        let totalItem = 0;
        let totalPagar = 0;
        for (const item of items) {
            totalItem = item.costo * item.cantidad;
            totalPagar+=totalItem;
        }
        //console.log(totalPagar);
        return totalPagar;
    }
    //
    return (
        <div>
            <table className="table table-hover">
                <thead className="bg-success text-white">
                    <tr>
                        <th scope="col">Servicio</th>
                        <th scope="col">Costo (S/.)</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"><strong>TOTAL A PAGAR</strong></td>
                        <td><strong>{calculateTotalPrice()}</strong></td>
                    </tr>
                </tfoot>
            </table>
            <div className="d-grid gap-2">
                <Button className="btn btn-danger" onClick={()=>clearAllItems()}>Eliminar todo</Button>
                <Button className="btn btn-primary">Comprar</Button>
            </div>
        </div>
    )
}
