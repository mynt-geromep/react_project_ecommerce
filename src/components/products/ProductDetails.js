import { useContext } from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams()
    const {product} = useFetch("https://fakestoreapi.com/products/" + id)
    const {value, setValue, cartItems, setCartItems, cartItemsPrice, setCartItemsPrice} = useContext(CartContext);

    return (
        <div className="product-details">
            {product && (
                <div className="product-details-preview">

                    <div className="image-column">
                        <img src={product.image} alt={`Product ${product.id}`} />
                    </div>

                    <div className="details-column">
                        <h3>{product.title}</h3>
                        <p className="details-category">Category: {product.category}</p>
                        <p className="details-price">$ {product.price}</p>
                        <p className="details-description">{product.description}</p>
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
                        <Link to="/store">
                            <p className="details-back">Back</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default ProductDetails;