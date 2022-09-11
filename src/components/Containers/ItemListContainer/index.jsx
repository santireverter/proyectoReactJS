import { useParams } from "react-router-dom";
import CardList from "../../CardList";


const ItemListContainer = () => {


        const {productoId}  = useParams();
        // const busquedaProducto = () => {
        // productoId = document.getElementById('busquedaProducto');
        // }

    return (
        <div>
            <h3>Inserte nombre del producto que desea</h3>
            <input type="text" placeholder="Que desea Buscar?" id="busquedaProducto" />
            <button >buscar</button>
            <CardList tipoDeProducto={productoId}/>
        </div>
        )
}

//onClick={busquedaProducto()}


export default ItemListContainer;