import { useState, useEffect } from "react"
import { getProducts } from "../mock/MockAsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({mensaje}) => {

    const [data, setData] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getProducts()
        .then((res) => {
            if(type) {
                setData(res.filter((prod) => prod.category === type))
            } else {
                setData(res)
            }
        })
        .catch((error) => console.error(error))
    }, [type])


    return (
        <div>
            <h1>{mensaje} {type && <span style={{textTransform: 'capitalize'}}>{type}</span>}</h1>
            <ItemList data = {data} />
        </div>
    )
}

export default ItemListContainer