import Card from '../card/Card'
import './MisVis.css'
import { data } from '../../../assets/data/data'

function MisVis() {
    return (  
        <div className='MisVisClass'>
            <Card title={data.MisVis.titulo[0]} cont={data.MisVis.info[0]}/>
            <Card title={data.MisVis.titulo[1]} cont={data.MisVis.info[1]}/>
        </div>
    );
}

export default MisVis;