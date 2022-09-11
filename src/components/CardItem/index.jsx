import { NavLink } from "react-router-dom";
import ItemCount from "../itemCount";

const CardItem = ({producto, tipoDeProducto}) => {

    const agregarCantidadCarrito = (cantidad) => {
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
    }

    return (
        <div style={{ border: '1px solid', color: '#282c34', display: 'flex', flexFlow: 'column', height: '600px', width: '400px', margin: '20px', alignItems: 'center' }}>
            <NavLink to={`/${tipoDeProducto}/${producto.id}`}><h3>{producto.title}</h3></NavLink>
            <img src={producto.thumbnail} alt='foto producto' style={{ height: '150px', width: '150px' }} />
            <h6>{producto.id}</h6>
            <h4>$ {producto.price}</h4>
            <ItemCount initial={1} stock={producto.available_quantity} onAdd={agregarCantidadCarrito} />
        </div>
    )
}



export default CardItem;