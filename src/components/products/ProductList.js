import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ProductList = ({products}) => {

    const {value, setValue, cartItems, setCartItems, cartItemsPrice, setCartItemsPrice} = useContext(CartContext);

    return ( 
        <div className="product-list">
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    
                    <img src={product.image} alt={`Product ${product.id}`} />
                    <h3>{product.title}</h3>
                    <p className="product-price">$ {product.price}</p>
                
                    <button onClick={() => {
                        setValue(value + 1)
                        
                        setCartItems([...cartItems, {
                            id: cartItems.length,
                            image: product.image,
                            title: product.title,
                            price: product.price
                        }])

                        setCartItemsPrice([...cartItemsPrice, {
                            id: cartItemsPrice.length,
                            price: product.price
                        }])

                    }}>Add to Cart</button>

                    <Link to={`/products/${product.id}`}>
                        <p className="view-details">View Details</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
 
export default ProductList;