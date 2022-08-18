const Title = (props) => {  // const Title = ({color, msj}) => {   -------> esto seria lo correcto para usar los props directamente
    return (<h1 style={{backgroundColor : props.color}}>{props.msj}</h1>)
}

export default Title;