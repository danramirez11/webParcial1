import Category from "../CategoryItem/CategoryItem";
import './SelectSection.css';

const SelectSection = ({section, onSelected, title, state}) => {
    const handleSelect = (optionSelected) => {
        onSelected({
            section: title,
            selected: optionSelected
        })
    }

    return (
        <>
        <h2>{title}</h2>
        <section className="selectSection">
            { section[0] ? 
            section.map((item, index) => (
                <Category key={index} props={item} onSelected={handleSelect} state={state[title]}/>
            )) : 
            Object.keys(section).map((item, index) => (
                <Category key={index} props={section[item]} onSelected={handleSelect} state={state[title]}/>
            ))}
        </section>
        </>
    );
}


export default SelectSection;