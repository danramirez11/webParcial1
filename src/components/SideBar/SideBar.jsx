import { useRef } from "react";

const SideBar = ({selected}) => {

    const totalPrice = Object.keys(selected).reduce((total, item) => {
        const price = selected[item].precio || selected[item].costo || 0;
        return total + price;
    }, 0);

    return (
        <section>
            <h2>Paquete</h2>
            {Object.keys(selected).map((item, index) => (
                <>
                    <p>{selected[item].nombre || selected[item].titulo}</p>
                    <p>{selected[item].precio || selected[item].costo}</p>
                </>
            ))}
            <h3>Total price: ${totalPrice}</h3>
        </section>
    );
}

export default SideBar;