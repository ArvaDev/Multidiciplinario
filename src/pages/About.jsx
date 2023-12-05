import './About.css';
import { data } from '../assets/data/data';
import Btn from '../components/atoms/Btn';
import Img from '../components/atoms/Img';

import img1 from '../assets/imgs/m15.jpeg';
import img2 from '../assets/imgs/m17.jpeg';
import img3 from '../assets/imgs/m14.jpeg';
import img4 from '../assets/imgs/m1.jpeg';
import img5 from '../assets/imgs/m5.jpeg';
import img6 from '../assets/imgs/m4.jpeg';
import img7 from '../assets/imgs/m2.jpeg';

function About() {

    return (
        <div className='AboutPageClass'>
            <p className='Title'>{data.AcercaDe.titulo}</p>
            <div className='AContainClass'>
                <div className='info'>
                    <h3>Historia</h3>
                    <p>{data.AcercaDe.cont}</p>
                    <Btn url="/Home" text="Volver" />
                </div>
                <div className='ImagesAClass'>
                    <Img url={img1}/>
                    <Img url={img2}/>
                    <Img url={img3}/>
                    <Img url={img4}/>
                    <Img url={img5}/>
                    <Img url={img6}/>
                    <Img url={img7}/>
                </div>
            </div>
        </div>
    );
}

export default About;