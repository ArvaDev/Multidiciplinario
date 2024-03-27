import './Input.css'

function Input({placeholder, type, id, cssClass}) {
    return ( 
        <input type={type} placeholder={placeholder} id={id} className={`InputClass ${cssClass}`} required></input>
    );
}

export default Input;