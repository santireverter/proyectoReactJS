import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCarrito = ({item, cantidad, index}) => {

    const {quitarItemCarrito} = useContext(CartContext);

    const buttonHandler = (item, cantidad) => {
        quitarItemCarrito(item, cantidad);
    }

    return (
        <div className="itemCarrito">
            <div className="divBotonEliminar">
                <h3>{item.title}</h3>
                <button onClick={() => buttonHandler(item.id, cantidad[index])}>X</button>
            </div>
            <div className="detalleItemCarrito">
                <img src={item.thumbnail} alt="foto item" />
                <h3>$ {item.price}</h3>
                <h3>Cantidad: {cantidad[index]}</h3>
                <h4>total= ${item.price * cantidad[index]}</h4>
            </div>
        </div>
    )

}

export default ItemCarrito;