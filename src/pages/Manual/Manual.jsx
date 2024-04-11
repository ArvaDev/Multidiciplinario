import './Manual.css'
import manual from '../../../public/PIMIENTA JOTIQUEZ S MANUAL.pdf'
export default function Manual() {
    return (
        <div>
            <iframe src={manual}></iframe>
        </div>
    );
}