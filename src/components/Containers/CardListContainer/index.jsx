import { useParams } from "react-router-dom";
import CardList from "../../CardList";


const CardListContainer = () => {

    const {categoriaId}  = useParams();

    return (
        <div>
            <CardList tipoDeProducto={categoriaId}/>
        </div>
        )
}



export default CardListContainer;