import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const CardDetailContainer = () => {

    const {categoriaId} = useParams();
    const {productoDetails} = useParams();
    const [detalles, setDetalle] = useState([]);

    // const traerDetalleProducto = async () => {
    //     try{
    //         const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoriaId}`);
    //         const data = await response.json();
    //         for (let i = 0; i <= 50; i++) {
    //             if ((data.results[i].id === productoDetails)){
    //             setDetalle(data.results[i]);
    //             }
    //         }
    //     } catch(err){
    //         // console.log(err);
    //     }
    // }
    useEffect(() => {
        traerProductosFirestore();
    },[])

    const traerProductosFirestore = () => {
        const db = getFirestore();
        const items = collection(db, 'items')
        const q = query(items, where("category", "==", categoriaId))
        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                ...doc.data(),
            }));
            setDetalle(docs);
            console.log(detalles);
            for (let i = 0; i <= docs.length; i++) {
                console.log(docs.id);
                if (docs[i].id === productoDetails){
                    setDetalle(docs[i]);
                }
            }
        });
    }


    return (
            <div>
                <ItemDetail detalle={detalles} />
            </div>
    )
}

export default CardDetailContainer;