import Btn from '../../components/UI/btn/Btn';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import './ProductPage.css';
import { useState } from 'react';
export default function ProductPage({ view, o }) {
  const [quantity, setQuantity] = useState(0)
  const handlerQuantity = (e) => {
    let value = e.target.value
    setQuantity(value)
  }
  const newObjet = [o.name, o.price, quantity, o.imgUrl]
  const cerrar = () => { /* Corto */ }
  const handClick = () => {
    if(newObjet[2] != 0){
      const jsonO = JSON.stringify(newObjet)
      localStorage.setItem(`Producto_${newObjet[0]}`, jsonO);
      alert("Se ha añadido el producto al carrito")
    }else{alert("No hay productos seleccionados")}
  }

  return (
    <div className='ProductPageClass' style={{ display: view }}>
      <Link onClick={`${cerrar}`} className='Volver' to="/Tienda">{"< Volver"}</Link>
      <div className='ContainerPr'>
        <div className='ContainerChild'>
          <img src={o.imgUrl} alt="Product"></img>
        </div>
        <div className='ContainerChild'>
          <p className='Title'>{o.name}</p>
          <p className='Precio'>${o.price}</p>
          <p>En disponibilidad {o.amount} unidades</p>
          <p>Añadir a carrito</p>
          <input type='number' min={1} max={o.amount} onChange={handlerQuantity}></input>
          <Btn text="Añadir a carrito" cssClass="ProductBtn" onClick={handClick} />
          <p className='Info'>{o.description}</p>
          <Link className='RedirectCarrito' to="/Tienda/Carrito"><FaShoppingCart/></Link>
        </div>
      </div>
    </div>
  );
};
