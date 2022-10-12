import { useParams } from "react-router-dom";
import CardList from "../../CardList";


const CardListContainer = () => {

    const {categoriaId}  = useParams();

    return (
        <div>
            {/* <h3>Inserte nombre del producto que desea</h3>
            <input type="text" placeholder="Que desea Buscar?" id="busquedaProducto" />
            <button >buscar</button> */}
            <CardList tipoDeProducto={categoriaId}/>
        </div>
        )
}



export default CardListContainer;