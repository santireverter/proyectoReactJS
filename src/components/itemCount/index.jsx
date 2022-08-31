import { useState } from "react";


const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);
    const itemSuma = () => {
        if (contador >= initial && contador < stock){
        setContador(contador + 1);
        }
    }

    const itemResta = () => {
        if (contador > initial){
        setContador(contador - 1);
        }
    }

    return (
        <div style = {{display: 'flex', flexDirection: 'column'}}>
            <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <button id="agregarItem" style = {{height: '50px', width: '50px'}} onClick = {itemSuma}>+</button>
                <div id="cantidadItem">{contador}</div>
                <button id="restarItem" style = {{height: '50px', width: '50px'}} onClick = {itemResta}>-</button>
            </div>
            <div>
                <button style={{ border: 'solid' }} onClick = {() => onAdd(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount;
