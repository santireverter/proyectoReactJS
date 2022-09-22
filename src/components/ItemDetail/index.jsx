import { useState } from "react";
import ItemCount from "../itemCount";

const ItemDetail = ({ detalle }) => {

    const [cantidadItem, setCantidad] = useState();

    const agregarCantidadCarrito = (cantidad) => {
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
        setCantidad(cantidad);
    }


    return (
        <div key={detalle.id} className='divDetail'>
            <h3>{detalle.title}</h3>
            <img src={detalle.thumbnail} alt="foto producto" />
            <p>Este {detalle.title} esta flama</p>
            <h4>$ {detalle.price}</h4>
            <ItemCount initial={1} stock={detalle.available_quantity} onAdd={agregarCantidadCarrito} detalle={detalle}/>
        </div>
    )
}

export default ItemDetail;