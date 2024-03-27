import Lupa from '../../components/Animations/lupa/lupa';
import './NoFound.css'
export default function NoFound() {
    return (
        <div className="NoF">
            <h1>404</h1>
            <p>Página no encontrada</p>

            <div className='Draw'>
                <Lupa/>
            </div>
        </div>
    );
}