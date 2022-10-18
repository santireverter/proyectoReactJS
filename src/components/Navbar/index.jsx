import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget";
import '../../style/estilo.css'
import Li from '../Li';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {

    const {contador} = useContext(CartContext);

    return (
        <nav className='navbar'>
            <Link className='contadorCarrito' to='/'><h2>Ebano y Marfil</h2></Link>
            <ul className='listaNavbar'>
                <Link className='linkNavbar' to='/zapatos'><Li msj={'Zapatos'}/></Link>
                <Link className='linkNavbar' to='/remeras'><Li msj={'Remeras'}/></Link>
                <Link className='linkNavbar' to='/accesorios'><Li msj={'Accesorios'}/></Link>
                <NavLink className='contadorCarrito' to='/cart'><CartWidget></CartWidget><span id='carrito'>{contador}</span></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;
