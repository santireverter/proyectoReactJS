import { useState } from "react";


const ItemCount = () => {

    const [contador, setContador] = useState(1);
    const itemSuma = () => {
        if (contador >= 1 && contador < 5){
        setContador(contador + 1);
        }
    }

    const itemResta = () => {
        if (contador > 1){
        setContador(contador - 1);
        }
    }

    const agregarCantidadCarrito = () =>{
        let cantidad = document.getElementById('carrito');
        cantidad.innerHTML = contador
    }


    return (
        <div style = {{display: 'flex', flexDirection: 'column'}}>
            <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <button id="agregarItem" style = {{height: '50px', width: '50px'}} onClick = {itemSuma}>+</button>
                <div id="cantidadItem">{contador}</div>
                <button id="restarItem" style = {{height: '50px', width: '50px'}} onClick = {itemResta}>-</button>
            </div>
            <div>
                <button style={{ border: 'solid' }} onClick = {agregarCantidadCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount;
