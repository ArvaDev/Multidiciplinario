import './Acciones.css'

function Acciones({image, titulo, cont}) {
    return ( 
        <div className='AccionClass'>
            <h1>{image}</h1>
            <p className='TitleClass'>{titulo}</p>
            <p>{cont}</p>
        </div>
    );
}

export default Acciones;