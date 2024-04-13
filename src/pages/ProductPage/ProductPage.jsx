import Carrito from '../../components/UI/carrito/Carrito';
import Btn from '../../components/UI/btn/Btn';
import { Link } from 'react-router-dom';
import './ProductPage.css';
export default function ProductPage({ view, o }) {
  const cerrar = () => { /* Corto */ }

  /* Acción para añadir al carrito */
  const handClick = () => {
    const jsonO = JSON.stringify(o)
    localStorage.setItem(`Producto_${o.name}`, jsonO);
  }
  return (
    <div className='ProductPageClass' style={{ display: view }}>
      <Carrito />
      <Link onClick={`${cerrar}`} className='Volver' to="/Tienda">{"< Volver"}</Link>
      <div className='ContainerPr'>
        <div className='ContainerChild'>
          <img src={o.imgUrl} alt="Product"></img>
        </div>
        <div className='ContainerChild'>
          <p className='Title'>{o.name}</p>
          <p className='Precio'>${o.price}</p>
          <p>Añadir a carrito</p>
          <input type='number' min={0}></input>
          <Btn text="Añadir a carrito" cssClass="ProductBtn" onClick={handClick} />
          <p className='Info'>{o.description}</p>
        </div>
      </div>
    </div>
  );
};
