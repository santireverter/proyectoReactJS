import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCarrito = ({item, cantidad, index}) => {

    const {quitarItemCarrito} = useContext(CartContext);
    const [eliminar, setEliminar] = useState(true);

    const buttonHandler = (item, cantidad) => {
        setEliminar(false);
        quitarItemCarrito(item, cantidad);
    }

    return <>
        {eliminar ? 
        <div>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt="foto item" />
            <h3>$ {item.price}</h3>
            <h3>Cantidad: {cantidad[index]}</h3>
            <h4>total= ${item.price * cantidad[index]}</h4>
            <button onClick={() => buttonHandler(item.id, cantidad[index])}>X</button>
        </div> : 
        <div>
            <h3>Elemento Eliminado</h3>
        </div>}
    </>

}

export default ItemCarrito;