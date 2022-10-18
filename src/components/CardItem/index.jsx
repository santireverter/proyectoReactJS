import { NavLink } from "react-router-dom";
import '../../style/estilo.css'

const CardItem = ({producto, tipoDeProducto}) => {

    return (
        <NavLink className='divCardLink' to={`/${tipoDeProducto}/${producto.id}`}><div className="divCard">
            <h3>{producto.title}</h3>
            <img src={producto.thumbnail} alt='foto producto' className="imgThumbnail" />
            <h4>$ {producto.price}</h4>
        </div></NavLink>
    )
}



export default CardItem;