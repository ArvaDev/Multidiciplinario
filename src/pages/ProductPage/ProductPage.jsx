import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Btn from '../../components/UI/btn/Btn';
import FormularioCompra from '../../components/UI/formularioCompra/formularioCompra';
import './ProductPage.css';
export default function ProductPage({ view, o }) {
  const [quantity, setQuantity] = useState(0);
  const [comprar, setComprar] = useState("none")
  let isInStock
  const [newProduct, setNewProduct] = useState({})
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };
  isInStock = o.amount === 0 ? true : false
  const handleAddToCart = () => {
    if (quantity !== 0 && quantity != 0) {
      const newObject = {
        name: o.name,
        price: o.price,
        quantity: quantity,
        imgUrl: o.imgUrl,
        _id: o._id
      };
      localStorage.setItem(`Producto_${newObject.name}`, JSON.stringify(newObject));
      alert("Se ha añadido el producto al carrito");
      window.location.href = '/Tienda/Carrito'
    } else {
      alert("Por favor, ¿Cuántos productos va a comprar?");
    }
  };

  const handleClose = () => {
    location.reload()
  };

  const comprarHandler = () => {
    if (quantity !== 0 && quantity != 0) {
      const newObject = {
        name: o.name,
        price: o.price,
        quantity: parseInt(quantity),
        imgUrl: o.imgUrl,
        _id: o._id
      };
      setNewProduct(newObject)
      setComprar("flex")
    } else {
      alert("Por favor, ¿Cuántos productos va a comprar?");
    }
  }
  return (
    <div className='ProductPageClass' style={{ display: view }}>
      <FormularioCompra state={comprar} productos={newProduct} />
      <Link onClick={handleClose} className='Volver' to="/Tienda">{"< Volver"}</Link>
      <div className='ContainerPr'>
        <div className='ContainerChild'>
          <img src={o.imgUrl} alt="Product" />
        </div>
        <div className='ContainerChild'>
          <p className='Title'>{o.name}</p>
          <p className='Precio'>${o.price}</p>
          <p>En disponibilidad {o.amount} unidades</p>
          <p>Añadir a carrito</p>
          <input type='number' min={0} max={o.amount} onChange={handleQuantityChange} disabled={isInStock}/>
          <Btn text="Añadir a carrito" cssClass="ProductBtn" onClick={handleAddToCart} />
          <p className='Info'>{o.description}</p>
          <button onClick={comprarHandler} className='Comprar'><FaShoppingCart /></button>
        </div>
      </div>
    </div>
  );
};
