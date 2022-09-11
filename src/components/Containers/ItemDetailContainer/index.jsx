import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const ItemDetailContainer = () => {

    const {productoId} = useParams();
    const {productoDetails} = useParams();

    const [detalles, setDetalle] = useState([]);

    const traerDetalleProducto = async () => {
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${productoId}&sort=sortId=${productoDetails}`);
            const data = await response.json();
            setDetalle(data.results[0]);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        traerDetalleProducto();
    }, [])

    console.log(detalles);

    return (
            <div>
                <ItemDetail detalle={detalles} />
            </div>
    )
}

export default ItemDetailContainer;