import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const CardDetailContainer = () => {

    const {categoriaId} = useParams();
    const {productoDetails} = useParams();
    const [detalles, setDetalle] = useState([]);

    const traerDetalleProducto = async () => {
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoriaId}`);
            const data = await response.json();
            for (let i = 0; i <= 50; i++) {
                if ((data.results[i].id === productoDetails)){
                setDetalle(data.results[i]);
                }
            }
        } catch(err){
            // console.log(err);
        }
    }
    useEffect(() => {
        traerDetalleProducto();
    },[])


    return (
            <div>
                <ItemDetail detalle={detalles} />
            </div>
    )
}

export default CardDetailContainer;