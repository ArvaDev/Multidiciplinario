import './ProductoCal.css'

function ProductoCal({producs, paises, volumen, calidad, certificados, prodNac, region, altura, precentacion}) {
    return (
        <div className="ProductoCalClass">
            <div className='Column'>
                <h2>Productos de exportación</h2>
                <p>{producs}</p>
                <h2>Países</h2>
                <p>{paises}</p>
                <h2>Volumen</h2>
                <p>{volumen}</p>
                <h2>Calidades</h2>
                <p>{calidad}</p>
                <h2>Certificados</h2>
                <p>{certificados}</p>
            </div>
            <div className='Column'>
                <h2>Productos nacionales</h2>
                <p>{prodNac}</p>
                <h2>Región</h2>
                <p>{region}</p>
                <h2>Altura</h2>
                <p>{altura}</p>
                <h2>Precentación</h2>
                <p>{precentacion}</p>
            </div>
        </div>
    );
}

export default ProductoCal;