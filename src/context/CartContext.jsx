import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]); 
    const [cantidadItems, setCantidadItems] = useState([]);
    const [contador, setContador] = useState(0);

    const agregarItemCarrito = (item, cantidad) => {
        setCarrito([...carrito, item]);
        console.log(carrito);
        // setCantidadItems(cantidadItems + cantidad); esto anda pero es peor que lo que estoy probando


        setCantidadItems([...cantidadItems, cantidad]);

            console.log(cantidadItems);

        for (let i = 0; i < cantidadItems.length; i++) {

            setContador(contador + cantidadItems[i]);
        }
        console.log(contador);

    }


    const quitarItemCarrito = () => {
        let encontrar = carrito.find(item => item === item.id)
        let elementoAEliminar = carrito.findIndex(encontrar)
        setCarrito(carrito.splice(elementoAEliminar, 1))
    }

    const borrarTodo = () => {
        setCarrito([])
    }

    const estaEnCarrito = () => {
        let elementoEnCarrito = carrito.find(item => item === item.id)
        let estaElItem = elementoEnCarrito !== undefined ? true : false;
    }


    return(
    <CartContext.Provider value={{carrito, cantidadItems, contador, agregarItemCarrito, quitarItemCarrito, borrarTodo, estaEnCarrito}}>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartProvider}