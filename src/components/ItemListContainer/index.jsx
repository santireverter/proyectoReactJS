import ItemCount from "../itemCount";

const ItemListContainer = () => {

    const agregarCantidadCarrito = (cantidad) =>{
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
    }


    return (
        <div>
            <h1>Bienvenido a Ebano y Marfil</h1>
            <h2>Aqui podras ver proximamente todos nuestros Productos</h2>
            <ItemCount stock={5} initial={1} onAdd={agregarCantidadCarrito}/>
        </div>
        )
}



export default ItemListContainer;