import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const CompraCarrito = () => {

    const {carrito, cantidadItems} = useContext(CartContext);
    const [precioFinal, setPrecioFinal] = useState(0);

    const [form, setForm] = useState({
        comprador:{name: '', phone: '', email: ''},
        items:[],
        total: 0
    });

    const calcularTotal = (array) => {
        // return array.reduce((total, actual) => {
        //     return total + actual;
        // }, 0);
        for (let i = 0; i < carrito.length; i++) {
            setPrecioFinal(carrito[i].price * cantidadItems[i])
            console.log(i);
        }
    }

    const [id, setId] = useState();
    const changeHandler = (event) => {
        let userName = document.getElementById('name').value
        let phoneNumber = document.getElementById('phone').value
        let userEmail = document.getElementById('email').value
        calcularTotal();
        console.log(precioFinal);
        const newform = {...form, comprador:{name: userName, phone: phoneNumber, email: userEmail},
                                items: carrito,
                                total: precioFinal};
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
                    <input name='name' type="text" id="name" onChange={changeHandler}/>
                    <label htmlFor="phone">Telefono</label>
                    <input name="phone" type="number" id="phone" onChange={changeHandler}/>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" id="email" onChange={changeHandler}/>
                    <button type="submit">Finalizar Compra</button>
                </form>
            )}
        </div>
    )
}

export default CompraCarrito;