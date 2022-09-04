import CardItem from "../CardItem";
import { useEffect, useState } from "react";

const CardList = () =>{

    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        try{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=relojes');
            const data = await response.json();
            setProductos(data.results);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        buscarProductos();
    },[])

    return(
        <div style={{display: 'flex', flexDirection: 'row', wrap: 'nowrap'}}>
            <ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {productos.map((producto, index) => {
                    return <CardItem producto={producto} />
                })}
            </ul>
        </div>
    );
}


export default CardList;