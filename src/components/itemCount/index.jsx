import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import '../../style/estilo.css'

const ItemCount = ({initial, stock, onAdd, detalle}) => {

    const [contador, setContador] = useState(initial);

    const itemSuma = () => {
        if (contador >= initial && contador < stock){
        setContador(contador + 1);
        }
    }

    const itemResta = () => {
        if (contador > initial){
        setContador(contador - 1);
        }
    }

    const {carrito, agregarItemCarrito} = useContext(CartContext);

    const agregarCarrito = (detalle) => {
        agregarItemCarrito(detalle);
    }

    return (
        <div className="contenedorContador">
            <div className="contenedorBotones">
                <button id="agregarItem" className="botonesContador" onClick={itemSuma}>+</button>
                <div id="cantidadItem">{contador}</div>
                <button id="restarItem" className="botonesContador" onClick={itemResta}>-</button>
            </div>
            <div>
                <button className="botonCarrito" onClick = {() => onAdd(contador)}>Agregar al carrito</button>
                <Link to='/cart'><button onClick={agregarCarrito(detalle)} className="botonCarrito">Comprar ahora</button></Link>
            </div>
        </div>
    )
}


export default ItemCount;
