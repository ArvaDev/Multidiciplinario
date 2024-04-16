import React, { useState } from 'react';
import Input from '../../UI/input/Input';
import Btn from '../btn/Btn';
import axios from 'axios';
import './formularioCompra.css';

export default function FormularioCompra({ state, productos }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleCerrar = () => {
        location.reload();
    };

    const handleCompra = () => {
        if (!nombre || !email || !telefono) {
            alert('Por favor completa todos los campos antes de realizar la compra');
            return;
        }
        
        let productosArray = [];
        if (Array.isArray(productos)) {
            // Si productos es un arreglo, hacer un map para obtener un nuevo arreglo de productos
            productosArray = productos.map(producto => ({
                idProduct: producto._id,
                quantity: producto.quantity,
                total_price: producto.price
            }));
        } else {
            // Si productos es un objeto, agregarlo directamente al array de productos
            productosArray.push({
                idProduct: productos._id,
                quantity: productos.quantity,
                total_price: productos.price
            });
        }

        setNombre('');
        setEmail('');
        setTelefono('');
        const compra = {
            buyerData: {
                name: nombre,
                email: email,
                phone: parseInt(telefono)
            },
            products: productosArray
        };
        
        axios.post('http://18.233.236.214/api/v1/orders/', compra)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                alert('Compra realizada exitosamente');
                location.reload();
                localStorage.clear();
            })
            .catch(error => {
                console.error('Error al hacer la petición:', error);
                alert('Error al realizar la compra');
                location.reload();
            });
    };

    return (
        <div className="formularioCompraClass" style={{ display: state }}>
            <div className='ContainForm'>
                <div className='Inputs'>
                    <p>Gracias por su compra</p>
                    <Input cssClass="CustomInput" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <Input cssClass="CustomInput" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input cssClass="CustomInput" type="number" placeholder="Numero telefonico" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <Btn text="Comprar" onClick={handleCompra} />
                    <Btn text="Cancelar compra" onClick={handleCerrar} />
                </div>
            </div>
        </div>
    );
}
