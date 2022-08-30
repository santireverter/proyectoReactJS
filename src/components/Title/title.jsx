const Title = ({color, msj}) => {  // const Title = ({color, msj}) => {   -------> esto seria lo correcto para usar los props directamente
    return (<h1 style={{backgroundColor : color}}>{msj}</h1>)
}

export default Title;