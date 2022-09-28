import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget";
import '../../style/estilo.css'
import Li from '../Li';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {

    const {contador} = useContext(CartContext);

    return (
        <nav className='navbar'>
            <Link to='/'><h2>Ebano y Marfil</h2></Link>
            <ul className='listaNavbar'>
                <Link className='linkNavbar' to='/zapatos'><Li msj={'Zapatos'}/></Link>
                <Link className='linkNavbar' to='/remeras'><Li msj={'Remeras'}/></Link>
                <Link className='linkNavbar' to='/anillos'><Li msj={'Anillos'}/></Link>
                <a href="" className='linkCarrito'><CartWidget></CartWidget><span id='carrito'>{contador}</span></a>
            </ul>
        </nav>
    )
}

export default Navbar;
