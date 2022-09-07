const ItemDetail = ({detalle}) => {
    return (
        <div key={detalle.id} style={{ border: '1px solid', color: 'white', display: 'flex', flexFlow: 'column', height: '600px', width: '400px', margin: '20px', alignItems: 'center' }}>
            <h3>{detalle.title}</h3>
            <img src={detalle.thumbnail} alt="foto producto" />
            <p>Este reloj esta flama</p>
            <h4>$ {detalle.price}</h4>
            <ul>
                <li>pantalla tactil</li>
                <li>medidor de pasos y pulso</li>
                <li>diversos temas para personalizar</li>
            </ul>
        </div>
    )
}

export default ItemDetail;