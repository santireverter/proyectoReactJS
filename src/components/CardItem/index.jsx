import { NavLink } from "react-router-dom";
import ItemCount from "../itemCount";
import '../../style/estilo.css'

const CardItem = ({producto, tipoDeProducto}) => {

    const agregarCantidadCarrito = (cantidad) => {
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
    }

    return (
        <div className="divCard">
            <NavLink to={`/${tipoDeProducto}/${producto.id}`}><h3>{producto.title}</h3></NavLink>
            <img src={producto.thumbnail} alt='foto producto' className="imgThumbnail" />
            <h6>{producto.id}</h6>
            <h4>$ {producto.price}</h4>
            <ItemCount initial={1} stock={producto.available_quantity} onAdd={agregarCantidadCarrito} />
        </div>
    )
}



export default CardItem;