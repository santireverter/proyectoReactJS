import ItemCount from "../itemCount";

const ItemDetail = ({ detalle }) => {

    return (
        <div key={detalle.id} className='divDetail'>
            <h3>{detalle.title}</h3>
            <img src={detalle.thumbnail} alt="foto producto" />
            <h4>$ {detalle.price}</h4>
            <ItemCount initial={1} stock={detalle.stock} detalle={detalle}/>
        </div>
    )
}

export default ItemDetail;