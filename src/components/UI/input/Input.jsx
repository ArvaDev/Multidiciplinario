import './Input.css'

function Input({placeholder, type, id, cssClass, onChange}) {
    return ( 
        <input type={type} placeholder={placeholder} onChange={onChange} id={id} className={`InputClass ${cssClass}`}></input>
    );
}

export default Input;