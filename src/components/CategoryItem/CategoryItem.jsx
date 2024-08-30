import './Category.css';

const Category = ({ props, onSelected, state }) => {

    const handleClick = () => {
        onSelected(props);
    }

    const infoHotel = () => {
        const servicios = props.servicios.map((s, index) => (<p>{s}</p>))
        
        return (
            <>
            <p>hola</p></>
        )
    }

    return (
        <div className={`categoryCard ${state === props ? 'selectedCard' : null}`} onClick={handleClick}>
            <img src={props.imagen} alt="" />
            <h4>{props.nombre || props.titulo}</h4>
            <p>$ {props.precio || props.costo}</p>
            { props.estrellas && 
            infoHotel
            }
        </div>
    )
}

export default Category;