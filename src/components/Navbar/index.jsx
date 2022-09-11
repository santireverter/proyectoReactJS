import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget"


const Navbar = () => {

    return (
        <nav style={{display: 'flex',justifyContent:'center', flexDirection: 'column', margin: '40px', }}>
            <Link to='/'><h2>Ebano y Marfil</h2></Link>
            <ListGroup horizontal style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Link to='/zapatos'><ListGroup.Item>Zapatos</ListGroup.Item></Link>
                <Link to='/remeras'><ListGroup.Item>Remeras</ListGroup.Item></Link>
                <Link to='/anillos'><ListGroup.Item>Accesorios</ListGroup.Item></Link>
                <a href="" style={{color: 'black', textDecoration: 'none'}}><CartWidget></CartWidget><span id='carrito'>0</span></a>
            </ListGroup>
        </nav>
    )
}

export default Navbar;

















            {/* <ul style={{ display: 'flex', flexDirection: 'row' }}>
                <a href=""><Li msj="Zapatos"></Li></a>
                <a href=""><Li msj="Ropa"></Li></a>
                <a href=""><li style={{paddingTop:'20px', marginTop:'20px'}}>Accesorios
                    <ul style={{ display: 'flex', flexDirection: 'column' }}>
                        <Li msj="Relojes"></Li>
                        <Li msj="Paraguas"></Li>
                        <Li msj="Billeteras"></Li>
                    </ul>
                </li></a>
            </ul> */}