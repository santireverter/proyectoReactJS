import { useParams } from "react-router-dom";
import CardList from "../../CardList";


const CardListContainer = () => {

    let {categoriaId}  = useParams();
    console.log(categoriaId);
    if (categoriaId === undefined) {
        categoriaId = "Zapatos";
    }
    return (
        <div>
            <h3>Inserte nombre del producto que desea</h3>
            <input type="text" placeholder="Que desea Buscar?" id="busquedaProducto" />
            <button >buscar</button>
            <CardList tipoDeProducto={categoriaId}/>
        </div>
        )
}



export default CardListContainer;