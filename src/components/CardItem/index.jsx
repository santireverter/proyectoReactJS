import { NavLink } from "react-router-dom";
import '../../style/estilo.css'

const CardItem = ({producto, tipoDeProducto}) => {

    console.log(producto)
    return (
        <div className="divCard">
            <NavLink to={`/${tipoDeProducto}/${producto.id}`}><h3>{producto.title}</h3></NavLink>
            <img src={producto.thumbnail} alt='foto producto' className="imgThumbnail" />
            {/* <h6>{producto.id}</h6> */}
            <h4>$ {producto.price}</h4>
        </div>
    )
}



export default CardItem;