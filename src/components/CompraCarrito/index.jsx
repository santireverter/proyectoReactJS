import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";

const CompraCarrito = () => {

    const {carrito, borrarTodo, precioFinal, calcularTotal} = useContext(CartContext);

    const [form, setForm] = useState({
        comprador:{name: '', phone: '', email: ''},
        items:[],
        date: '',
        total: 0
    });

    // const calcularTotal = () => {
    //     let costoFinal = 0;
    //     for (let i = 0; i < carrito.length; i++) {
    //         costoFinal += carrito[i].price * cantidadItems[i];
    //     }
    //     setPrecioFinal(costoFinal);
    // }

    const [id, setId] = useState();

    const changeHandler = () => {
        let userName = document.getElementById('name').value
        let phoneNumber = document.getElementById('phone').value
        let userEmail = document.getElementById('email').value
        let fechaHoy = Date();
        calcularTotal();
        const newform = {
            ...form, comprador: { name: userName, phone: phoneNumber, email: userEmail },
            items: carrito,
            total: precioFinal,
            date: fechaHoy
        };
        setForm(newform);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (carrito.length !== 0) {
            borrarTodo();
            const db = getFirestore()
            const compraCarritoCollection = collection(db, 'compraCarrito');
            addDoc(compraCarritoCollection, form).then((snapshot) => setId(snapshot.id))
        }
    }

    return (
        <div className="divFormularioCompra">
            {typeof id !== 'undefined' ? (
                <div className="compraFinalizada">
                    <p>Se ha finalizado la compra y el id de compra es: '{id}'</p>
                    <Link to='/'><button>Volver a Pagina Principal</button></Link>
                </div>
            ) : (
                <form className="formularioCompra" onSubmit={submitHandler}>
                    <label htmlFor="name">Ingrese nombre y apellido</label>
                    <input name='name' type="text" id="name" onChange={changeHandler} placeholder="John Doe"/>
                    <label htmlFor="phone">Ingrese numero de telefono</label>
                    <input name="phone" type="number" id="phone" onChange={changeHandler} placeholder="1123456789"/>
                    <label htmlFor="email">Ingrese su email</label>
                    <input name='email' type="email" id="email" onChange={changeHandler} placeholder="miemail@micorreo.com"/>
                    <button type="submit">Finalizar Compra</button>
                </form>
            )}
        </div>
    )
}

export default CompraCarrito;