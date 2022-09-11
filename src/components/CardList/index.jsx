import CardItem from "../CardItem";
import { useEffect, useState } from "react";

const CardList = ({tipoDeProducto}) =>{

    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${tipoDeProducto}`);
            const data = await response.json();
            setProductos(data.results);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        buscarProductos();
    },)

    return(
        <div style={{display: 'flex', flexDirection: 'row', wrap: 'nowrap'}}>
            <ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {productos.map((producto, index) => {
                    return <CardItem producto={producto} tipoDeProducto={tipoDeProducto} key={producto.id}/>
                })}
            </ul>
        </div>
    );
}


export default CardList;