import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CompraCarrito = () => {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const [id, setId] = useState();

    const changeHandler = (event) => {
        const newform = {...form, [event.target.name]: event.target.value};
        setForm(newform);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore()
        const compraCarritoCollection = collection(db, 'compraCarrito');
        addDoc(compraCarritoCollection, form).then((snapshot) => setId(snapshot.id))
    }

    
    return (
        <div>
            {typeof id !== 'undefined' ? (
                <p>Se ha finalizado la compra y el id de compra es {id}</p>
            ) : (
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Nombre</label>
                    <input name='name' type="text" onChange={changeHandler} />
                    <label htmlFor="phone">Telefono</label>
                    <input name="phone" type="number" onChange={changeHandler} />
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" onChange={changeHandler} />
                    <button type="submit">Finalizar Compra</button>
                </form>
            )}

        </div>
    )
}

export default CompraCarrito;