import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget";
import '../../style/estilo.css'
import Li from '../Li';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link to='/'><h2>Ebano y Marfil</h2></Link>
            <ul className='listaNavbar'>
                <Link className='linkNavbar' to='/zapatos'><Li msj={'Zapatos'}/></Link>
                <Link className='linkNavbar' to='/remeras'><Li msj={'Remeras'}/></Link>
                <Link className='linkNavbar' to='/anillos'><Li msj={'Anillos'}/></Link>
                <a href="" className='linkCarrito'><CartWidget></CartWidget><span id='carrito'>0</span></a>
            </ul>
        </nav>
    )
}

export default Navbar;
