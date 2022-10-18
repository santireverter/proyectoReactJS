import CardItem from "../CardItem";
import { useContext, useEffect, useState } from "react";
import '../../style/estilo.css'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const CardList = ({tipoDeProducto}) =>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (tipoDeProducto !== undefined){
            traerProductosFirestore();
        }
    },[tipoDeProducto]);

    const traerProductosFirestore = () => {
        const db = getFirestore();
        const items = collection(db, 'items')
        const q = query(items, where("category", "==", tipoDeProducto))
        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductos(docs);;
        });
    }

    return(
        <div className="divCardList">
            <ul className="ulCardList">
                {productos.map((producto, index) => {
                    return <CardItem producto={producto} tipoDeProducto={producto.category} key={producto.id}/>
                })}
            </ul>
        </div>
    );
}


export default CardList;