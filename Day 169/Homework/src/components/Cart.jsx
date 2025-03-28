import CartItem from "./CartItem";
import useCart from "../hooks/useCart";

const Cart = () => {
    const { cart } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
    );
};

export default Cart;
