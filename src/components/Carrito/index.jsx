import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";

const Carrito = () => {

    const {carrito, cantidadItems, borrarTodo, corroborarCarrito, setCorroborarCarrito, precioFinal, calcularTotal} = useContext(CartContext);

    useEffect(() => {
        calcularTotal();
        if (carrito.length !== 0){
            setCorroborarCarrito(false);
        }
    },[])

    return(
        <div className="carrito">
            <ul>
                {carrito.map((carrito, index) => {
                    return (<ItemCarrito item={carrito} cantidad={cantidadItems} key={carrito.id} index={index} />
                    )
                })}
            </ul>
            {corroborarCarrito ?
                <NavLink to='/'><button className="botonVolverCompra">Volver a Comprar</button></NavLink> :
                <div className="divPrecioFinal">
                    <h3>El total de su compra es $ {precioFinal}</h3>
                <div className="botonesCarrito">
                    <NavLink to='/carritoCheckout'><button>Terminar mi Compra</button></NavLink>
                    <button onClick={() => borrarTodo()}>Eliminar todos los Items del Carrito</button>
                </div>
                </div>
            }
        </div>
    )
}
export default Carrito;