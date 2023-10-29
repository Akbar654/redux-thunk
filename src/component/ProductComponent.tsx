import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector( (state: any) => state.allProducts.products);
    const renderlist = products.map( ({id, title, image}: {id: number, title: string, image: string}) => {
        return (
            <div className="product" key={id}>
                <Link to={`/product/${id}`}>
                <div className="product-image" style={{ width: "250px", height: "250px" }}>
                    <img src={image} alt={title}  width={"100%"} height={"100%"} />
                </div>
                <h4 className="product-name">{title}</h4>
                <button className="cart-button">Add to cart</button>
                </Link>
            </div>
        );
    })
    
    return <>{renderlist}</>
}

export default ProductComponent;