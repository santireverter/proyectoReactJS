import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";

const CardDetailContainer = () => {

    const {categoriaId} = useParams();
    const {productoDetails} = useParams();
    const [detalles, setDetalle] = useState([]);

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
            for (let i = 0; i <= docs.length; i++) {
                if (docs[i].id === productoDetails){
                    setDetalle(docs[i]);
                }
            }
        });
    }


    return (
            <div className="divDetailContainer">
                <ItemDetail detalle={detalles} />
            </div>
    )
}

export default CardDetailContainer;