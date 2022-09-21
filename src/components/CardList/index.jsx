import CardItem from "../CardItem";
import { useEffect, useState } from "react";
import '../../style/estilo.css'


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
        if (tipoDeProducto != undefined){
        buscarProductos();
        }
    },)

    return(
        <div className="divCardList">
            <ul className="ulCardList">
                {productos.map((producto, index) => {
                    return <CardItem producto={producto} tipoDeProducto={tipoDeProducto} key={producto.id}/>
                })}
            </ul>
        </div>
    );
}


export default CardList;