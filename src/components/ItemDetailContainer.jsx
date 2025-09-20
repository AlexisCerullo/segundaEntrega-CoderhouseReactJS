import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/MockAsyncService";

const ItemDetailContainer = () => {
    
    const [detalle, setDetalle] = useState({})

    useEffect(() => [
        getOneProduct('03')
        .then((res)=> setDetalle(res))
        .catch((error) => console.error(error))
    ],[])

    return (
        <div>
            <ItemDetail detalle = {detalle}/>
        </div>
    )
}

export default ItemDetailContainer;