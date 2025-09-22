import React from "react";
import Contador from "./contador";
import "../css/ItemDetail.css"

const ItemDetail = ({ detalle }) => {

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de ${detalle.name}`)
    }

    return (
        <div>
            <h2 className="detalle-titulo">Detalle de: {detalle.name}</h2>
            <div className="detalle-contenido">
                <img className="detalle-imagen" src={detalle.img} alt={detalle.name} />
                <div className="detalle-textos">
                    <p className="detalle-descripcion">{detalle.description}</p>
                    <div className="detalle-contador">
                        <p className="detalle-precio">${detalle.price},00</p>
                        <p className="detalle-stock">Stock disponible: <span>{detalle.stock} </span> unidades</p>
                        <Contador stock={detalle.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;