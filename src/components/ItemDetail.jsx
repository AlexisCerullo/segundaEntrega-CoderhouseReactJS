import React from "react";

const ItemDetail = ({detalle}) => {
    return (
        <div> 
            <h2>Detalle de: {detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.descripcion}</p>
            <p>${detalle.price},00</p>
            <p>Stock disponible: {detalle.stock} unidades</p>
        </div>
    )
}

export default ItemDetail;