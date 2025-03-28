import useCart from "../hooks/useCart";

const CartSummary = () => {
    const { cart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default CartSummary;
