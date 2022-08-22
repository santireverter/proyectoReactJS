import Li from "../Li";

const Navbar = () => {
    return (
        <nav>
            <h2>Ebano y Marfil</h2>
            <ul style={{ display: 'flex', flexDirection: 'row' }}>
                <Li msj="Zapatos"></Li>
                <Li msj="Ropa"></Li>
                <li style={{paddingTop:'20px', marginTop:'20px'}}>Accesorios
                    <ul style={{ display: 'flex', flexDirection: 'column' }}>
                        <Li msj="Relojes"></Li>
                        <Li msj="Paraguas"></Li>
                        <Li msj="Billeteras"></Li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;