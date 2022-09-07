import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail";

const ItemDetailContainer = () => {

    const [detalles, setDetalle] = useState([]);

    const traerDetalleProducto = async () => {
        try{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=relojes');
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

        // <div>
        //     {detalles.map((detalle, index) => {
        //         return <ItemDetail detalle={detalle} key={detalle.id}/>
        //     })}
        // </div>
    )
}

export default ItemDetailContainer;