import './TextArea.css'

function TextArea({placeholder, id}) {
    return ( 
        <textarea className='TextAreaClass' placeholder={placeholder} id={id}></textarea>
    );
}

export default TextArea;