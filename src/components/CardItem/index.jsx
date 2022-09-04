import ItemCount from "../itemCount";

const CardItem = ({producto}) => {

    const agregarCantidadCarrito = (cantidad) => {
        let cantidadElem = document.getElementById('carrito');
        cantidadElem.innerHTML = cantidad;
    }

    return (
        <div style={{ border: '1px solid', color: 'white', display: 'flex', flexFlow: 'column', height: '600px', width: '400px', margin: '20px', alignItems: 'center' }}>
            <h3>{producto.title}</h3>
            <img src={producto.thumbnail} alt='foto producto' style={{ height: '150px', width: '150px' }} />
            <h6>{producto.id}</h6>
            <h4>$ {producto.price}</h4>
            <ItemCount initial={1} stock={producto.available_quantity} onAdd={agregarCantidadCarrito} />
        </div>
    )
}



export default CardItem;