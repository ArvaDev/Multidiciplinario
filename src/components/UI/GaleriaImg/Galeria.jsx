import React from "react";
import '../GaleriaImg/Galeria.css'

 export default function Galeria ({componentes}) {
    return (
        <div className="Galeria-container">
                 { componentes.length === 0 ? <p>No hay productos</p> : componentes.slice() }
        </div>
    );
}