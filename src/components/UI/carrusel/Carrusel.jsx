import './Carrusel.css'
import { useState } from 'react';

import Producto from "../producto/Producto";

const componentes = [
    <Producto nombre="Cafe" precio="32.5"/>,
    <Producto nombre="Miel" precio="16.5"/>,
    <Producto nombre="Pox" precio="43.0"/>,
    <Producto nombre="Pimienta" precio="6.0"/>,
    <Producto nombre="Té" precio="20.0"/>,
]

export default function Carrusel() {

    const [cardIndex, setCardIndex] = useState(0);

    const previusCard = () => {
        const newIndex = Math.max(0, cardIndex - 1);
        setCardIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = Math.min(cardIndex + 1, componentes.length - 4);
        setCardIndex(newIndex);
      };

    return (
        <div className='CarruselClass'>
            <button onClick={previusCard}>{'<'}</button>
            <div className='Container'>
                {
                    componentes.length === 0 ? <p>No hay productos</p> : componentes.slice(cardIndex, cardIndex + 4)
                }
            </div>
            <button onClick={goToNextSlide}>{'>'}</button>
        </div>
    );
}