// 1) შექმენით პროექტი სადაც მომხმარებელს შეეძლება რეგისტრაცია და ავტორიზაცია, უნდა გამოიყენოთ custoom hooks, მონაცემები შეინახეთ ლოკალურ ბაზაში, ავტორიზაციის შემდეგ შექმენით პანელი სადაც მომხმარებელს შეეძლება პროდუქტების დამატება ისევ ფორმით, დამატების შემდეგ უნდა მოხდეს მათი ცხრილის სახით გამოტანა, ცხრილში იქონიეთ ერთი ღილაკი delete რომელზეც დაკლიკების შემთხვევაში წაიშლება პროდუქტი, პროდუქტები უნდ აინახებოდეს ყოველი განახლების შემდეგ ლოკალლურ ბაზაში
import React, { useState, useEffect } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);

    const register = (email, password) => {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        setUser({ email, password });
    };

    const login = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setUser({ email, password });
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return { user, register, login, logout };
};

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    const addProduct = (product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));
    };

    const deleteProduct = (productId) => {
        const filteredProducts = products.filter((product) => product.id !== productId);
        setProducts(filteredProducts);
        localStorage.setItem("products", JSON.stringify(filteredProducts));
    };

    return { products, addProduct, deleteProduct };
};

const Register = ({ register }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        register(email, password);
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

const Login = ({ login }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

const ProductPanel = ({ user, logout, addProduct, products, deleteProduct }) => {
    const [productName, setProductName] = useState("");

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (productName) {
            addProduct({ id: Date.now(), name: productName });
            setProductName("");
        }
    };

    return (
        <div>
            <h2>Welcome, {user.email}</h2>
            <button onClick={logout}>Logout</button>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product Name"
                    required
                />
                <button type="submit">Add Product</button>
            </form>
            <h3>Product List</h3>
            {products.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>
                                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products added yet.</p>
            )}
        </div>
    );
};

const App = () => {
    const { user, register, login, logout } = useAuth();
    const { products, addProduct, deleteProduct } = useProducts();

    return (
        <div>
            {!user ? (
                <div>
                    <h1>Register</h1>
                    <Register register={register} />
                    <h1>Login</h1>
                    <Login login={login} />
                </div>
            ) : (
                <ProductPanel user={user} logout={logout} addProduct={addProduct} products={products} deleteProduct={deleteProduct} />
            )}
        </div>
    );
};

export default App;
