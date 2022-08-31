import { useEffect, useState } from "react";
import ItemCount from "../itemCount";

const CardItem = () => {

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
    console.log(productos);

    const agregarCantidadCarrito = (cantidad) =>{
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
    }


    return (
            productos.map((producto, index) => {
                return (
                        <div key={index} style={{ border: '1px solid', color: 'white', display: 'flex', flexFlow: 'column', height: '600px', width: '400px', margin: '20px', alignItems: 'center' }}>
                            <h3>{producto.title}</h3>
                            <img src={producto.thumbnail} alt='foto producto' style={{height:'150px', width:'150px'}} />
                            <h6>{producto.id}</h6>
                            <h4>$ {producto.price}</h4>
                            <ItemCount initial={1} stock={producto.available_quantity} onAdd={agregarCantidadCarrito} />
                        </div>
                )
            }
        )
    );
}




export default CardItem;