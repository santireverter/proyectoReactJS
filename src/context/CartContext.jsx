import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]); 

    const agregarItemCarrito = ({item}) => {
        setCarrito(...carrito, {item});
        
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
    <CartContext.Provider value={{carrito, agregarItemCarrito, quitarItemCarrito, borrarTodo, estaEnCarrito}}>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartProvider}