import CardItem from "../CardItem";
import { useEffect, useState } from "react";
import '../../style/estilo.css'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


const CardList = ({tipoDeProducto}) =>{

    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState('zapatos');

    // const buscarProductos = async () => {
    //     try{
    //         const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${tipoDeProducto}`);
    //         const data = await response.json();
    //         setProductos(data.results);
    //     } catch(err){
    //         console.log(err);
    //     }
    // }
    // useEffect(() => {
    //     if (tipoDeProducto !== undefined){
    //     buscarProductos();
    //     }
    // },)

    useEffect(() => {
        if (categoria !== undefined){
            traerProductosFirestore();
        }
    },[categoria]);

    const selectChangeHandler = (ev) => {
        setCategoria(ev.target.value);
    }

    const traerProductosFirestore = () => {
        const db = getFirestore();
        const items = collection(db, 'items')
        const q = query(items, where("category", "==", categoria))
        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(docs)
            setProductos(docs);
            console.log(productos);
        });
    }

    return(
        <div className="divCardList">
            <select name="" id="" onChange={selectChangeHandler}>
                <option value="zapatos">Zapatos</option>
                <option value="remeras">Remeras</option>
                <option value="accesorios">Accesorios</option>
            </select>
            <ul className="ulCardList">
                {productos.map((producto, index) => {
                    return <CardItem producto={producto} tipoDeProducto={producto.category} key={producto.id}/>
                })}
            </ul>
        </div>
    );
}


export default CardList;