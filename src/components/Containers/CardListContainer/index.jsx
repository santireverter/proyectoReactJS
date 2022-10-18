import { useParams } from "react-router-dom";
import CardList from "../../CardList";
import logo from '../../Logo/Enzo.png';


const CardListContainer = () => {

    const {categoriaId}  = useParams();

    return (
        <div>
            <header className='appHeader'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Bienvenido a Ebano y Marfil</h1>
            </header>
            <CardList tipoDeProducto={categoriaId} />
        </div>
        )
}



export default CardListContainer;