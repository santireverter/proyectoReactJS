import ItemCount from "../itemCount";

const ItemDetail = ({ detalle }) => {

    console.log(detalle);
    return (
        <div key={detalle.id} className='divDetail'>
            <h3>{detalle.title}</h3>
            <img src={detalle.thumbnail} alt="foto producto" />
            <p>Este {detalle.title} esta flama</p>
            <h4>$ {detalle.price}</h4>
            <ItemCount initial={1} stock={detalle.stock} detalle={detalle}/>
        </div>
    )
}

export default ItemDetail;