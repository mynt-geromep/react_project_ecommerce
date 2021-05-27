import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {

    const {cartItems, setCartItems, value, setValue, cartItemsPrice, setCartItemsPrice} = useContext(CartContext);
    const [totalPayment, setTotalPayment] = useState(true)
    const [totalPaymentPrice, setTotalPaymentPrice] = useState(0)
    const [checkoutSuccess, setCheckoutSuccess] = useState(null)

    const clearItems = () => {
        setTotalPayment(false)
        setTotalPaymentPrice("0.00")
        setCartItems([])
        setValue(0)
    }

    const checkoutMessage = () => {
        if (value === 0) {
            alert("Add an item first. Before checking out.");
        } else {
            setCheckoutSuccess("Successful checkout!")
        }
    }
 
    useEffect( () => {
        if (totalPayment) {
            const total = cartItemsPrice.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
            const totalPrice = total.toFixed(2)
            setTotalPaymentPrice(totalPrice)      
        } else {
            setCartItemsPrice([])
        }
        return (
            <div>{totalPaymentPrice}</div>
        ) 
    }, [totalPaymentPrice])


    return (
        <div className="cart-list">
            <h2>Cart Items</h2>
            <div className="cart-column-1">
                {cartItems.map( (item) => (
                    <div className="cart-preview" key={item.id}>
                        <div className="cart-image">
                            <img src={item.image} alt={item.id} />
                            <div className="cart-details">
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-column-2">
                <p>Total Items</p>
                <h3>{value}</h3>
                <p>Total Payment</p>
                <h3>{totalPaymentPrice}</h3><hr />
                <button className="cart-btn-checkout" onClick={() => {
                    clearItems()
                    checkoutMessage()
                }}>Checkout</button>
                <button className="cart-btn-clear" onClick={clearItems}>Clear</button>
                <div className="cart-checkout-message">
                    {checkoutSuccess}
                </div>
            </div>
        </div>
    );
}
 
export default Cart;