import './ProductCard.css'
export default function ProductCard({img, content, title}) {
    return (
        <div className="ProductCard">
            <img src={img}/>
            <div className="Container">
                <p className="Title">{title}</p>
                <p className="ContainerText">{content}</p>
            </div>
        </div>
    );
}