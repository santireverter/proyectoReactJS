import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]); 
    const [cantidadItems, setCantidadItems] = useState([]);
    const [contador, setContador] = useState(0);
    const [corroborarCarrito, setCorroborarCarrito] = useState(true);

    const agregarItemCarrito = (item, cantidad) => {
        setCarrito([...carrito, item]);
        setCantidadItems([...cantidadItems, cantidad]);
        setContador(contador + cantidad);
    }

    const quitarItemCarrito = (item) => {
        let encontrar = carrito.find(item => item === item.id)
        let elementoAEliminar = carrito.findIndex(encontrar)
        setCarrito(carrito.splice(elementoAEliminar, 1))
    }

    const borrarTodo = () => {
        setCarrito([]);
        setCorroborarCarrito(true);
        setContador(0);
    }

    const estaEnCarrito = () => {
        let elementoEnCarrito = carrito.find(item => item === item.id)
        let estaElItem = elementoEnCarrito !== undefined ? true : false;
    }


    return(
    <CartContext.Provider value={{carrito, cantidadItems, contador, corroborarCarrito, setCorroborarCarrito, agregarItemCarrito, quitarItemCarrito, borrarTodo, estaEnCarrito}}>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartProvider}