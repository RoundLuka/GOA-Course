import { CartProvider } from "../context/CartContext";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Checkout from "../components/Checkout";

function App() {
    return (
        <CartProvider>
            <h1>My Store</h1>
            <ProductList />
            <Cart />
            <CartSummary />
            <Checkout />
        </CartProvider>
    );
}

export default App;
