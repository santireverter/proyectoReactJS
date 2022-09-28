import { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";

const Carrito = () => {

    const {carrito, cantidadItems} = useContext(CartContext);
    const [corroborarCarrito, setCorroborarCarrito] = useState(true);
    console.log(carrito);

    useEffect(() => {
        if (carrito.length !== 0){
            setCorroborarCarrito(false);
        }
    },[])


    return(
        <div>
            <ul>
                {carrito.map((carrito, index) => {
                    return (<ItemCarrito item={carrito} cantidad={cantidadItems} key={carrito.id} index={index}/>
                    )
                })}
            </ul>
            {corroborarCarrito ? 
            <NavLink to='/'><button>Volver a Comprar</button></NavLink> : <button>Terminar mi Compra</button>}
        </div>
    )
}
export default Carrito;