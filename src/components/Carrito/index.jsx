import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {

    const {carrito, cantidadItems} = useContext(CartContext)
    return(
        <div>
            
        </div>
    )
}
export default Carrito;