import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import '../../style/estilo.css'

const ItemCount = ({initial, stock, detalle}) => {

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

    const agregarCarrito = (detalle, cantidad) => {
        agregarItemCarrito(detalle, cantidad);
    }

    return (
        <div className="contenedorContador">
            <div className="contenedorBotonesContador">
                <button id="agregarItem" className="botonesContador" onClick={itemSuma}>+</button>
                <div className="cantidadItem" id="cantidadItem">{contador}</div>
                <button id="restarItem" className="botonesContador" onClick={itemResta}>-</button>
            </div>
            <div className="contenedorBotonesCompra">
                <button className="botonCarrito" onClick={() => agregarCarrito(detalle, contador)}>Agregar al carrito</button>
                <Link to='/cart'><button className="botonCarrito">Comprar ahora</button></Link>
            </div>
        </div>
    )
}


export default ItemCount;
