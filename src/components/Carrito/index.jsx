import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";

const Carrito = () => {

    const {carrito, cantidadItems} = useContext(CartContext);

    return(
        <div>
            <NavLink to='/'><button>Volver a Comprar</button></NavLink>
            <ul>
                {carrito.map((carrito, index) => {
                    return (<ItemCarrito item={carrito} cantidad={cantidadItems} key={carrito.id} index={index}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Carrito;