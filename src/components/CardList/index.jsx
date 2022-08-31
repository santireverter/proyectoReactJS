import CardItem from "../CardItem";

const CardList = () =>{
    return(
        <div style={{display: 'flex', flexDirection: 'row', wrap: 'nowrap'}}>
            <ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <CardItem />
            </ul>
        </div>
    );
}


export default CardList;