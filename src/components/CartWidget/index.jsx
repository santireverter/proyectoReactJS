import { NavLink } from 'react-router-dom';
import logo from './Cart.png'

const CartWidget = () => {
    return (
        <NavLink to='/cart'><img src={logo} width ='30' height ='30' alt="Carrito"></img></NavLink>
    )
}

export default CartWidget;

