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

    const quitarItemCarrito = (item, cantidad) => {
        let encontrar = carrito.find(producto => producto.id === item);
        let elementoAEliminar = carrito.findIndex(elemento => elemento === encontrar);
        carrito.splice(elementoAEliminar, 1);
        cantidadItems.splice(elementoAEliminar, 1);
        setCarrito(carrito);
        setCantidadItems(cantidadItems);
        setContador(contador - cantidad);
        if (carrito.length === 0) {
            setCorroborarCarrito(true);
        }
    }

    const borrarTodo = () => {
        setCarrito([]);
        setCantidadItems([]);
        setCorroborarCarrito(true);
        setContador(0);
    }


    return(
    <CartContext.Provider value={{carrito, cantidadItems, contador, corroborarCarrito, setCorroborarCarrito, agregarItemCarrito, quitarItemCarrito, borrarTodo}}>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartProvider}