import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const ItemDetailContainer = () => {

    const {productoId} = useParams();
    const {productoDetails} = useParams();
    console.log(productoDetails);
    const [detalles, setDetalle] = useState([]);

    const traerDetalleProducto = async () => {
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${productoId}`);
            const data = await response.json();
            for (let i = 0; i <= 50; i++) {
                if ((data.results[i].id === productoDetails)){
                setDetalle(data.results[i]);
                }
            }
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        traerDetalleProducto();
    },[])

console.log(detalles);

    return (
            <div>
                <ItemDetail detalle={detalles} />
            </div>
    )
}

export default ItemDetailContainer;