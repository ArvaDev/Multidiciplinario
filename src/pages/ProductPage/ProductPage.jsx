import React, { useState } from 'react';
import Btn from '../../components/UI/btn/Btn';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = ({ view, o }) => {
  const handler = () => {/* Corto */}
  const handler2 = () => {/*Funcion de corte*/}
  return (
    <div className='ProductPageClass' style={{ display: view }}>
      <Link onClick={`${handler} ${handler2}`} className='Volver' to="/Tienda">{"< Volver"}</Link>
      <div className='ContainerPr'>
        <div className='ContainerChild'>
          <img src={o.imagen} alt="Product"></img>
        </div>
        <div className='ContainerChild'>
          <p className='Title'>{o.nombre}</p>
          <p className='Precio'>${o.precio}</p>
          <p>Añadir a carrito</p>
          <input type='number' value={1}></input>
          <Btn text="Añadir a carrito" cssClass="ProductBtn" />
          <p className='Info'>{o.informacion}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
