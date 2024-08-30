import './Category.css';

const Category = ({ props, onSelected, state }) => {

    const handleClick = () => {
        onSelected(props);
    }

    return (
        <div className={`categoryCard ${state === props ? 'selectedCard' : null}`} onClick={handleClick}>
            <img src={props.imagen} alt="" />
            <h4>{props.nombre || props.titulo}</h4>
            <p>$ {props.precio || props.costo}</p>
            { props.estrellas ? <p>{'⭐'.repeat(props.estrellas)}</p> : null }
            { props.ubicacion ? props.ubicacion : null }
            { props.servicios ? <p>{props.servicios.join(', ')}</p> : null }
        </div>
    )
}

export default Category;