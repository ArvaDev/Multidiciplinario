import './Input.css'

function Input({placeholder, type, id}) {
    return ( 
        <input type={type} placeholder={placeholder} id={id} className="InputClass" required></input>
    );
}

export default Input;