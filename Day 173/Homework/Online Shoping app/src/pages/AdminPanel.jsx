import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const savedProducts = localStorage.getItem("products");
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);
    

    const saveToLocal = (updatedProducts) => {
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: Date.now(),
            name: e.target.name.value,
            price: parseFloat(e.target.price.value),
            description: e.target.description.value,
            count: 1,
        };
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
        saveToLocal(updatedProducts);
        e.target.reset();
    };
    
    const handleDelete = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        saveToLocal(updatedProducts);
    };
    
    const handleUpdate = () => {
        const updatedProducts = products.map((p) =>
            p.id === editProduct.id ? editProduct : p
        );
        setProducts(updatedProducts);
        saveToLocal(updatedProducts);
        setEditProduct(null);
    };
    
    const handleEdit = (product) => {
        setEditProduct({ ...product });
    };
    

    return (
        <main>
            <section>
                <h2>Admin Panel</h2>
                <p>Welcome to the admin panel</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
            </section>

            <section>
                <h2>Add Products</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Product Name" required />
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="text" name="description" placeholder="Description" required />
                    <button type="submit">Add Product</button>
                </form>
            </section>

            <section>
                <h2>Manage Products</h2>
                {products.length > 0 ? (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Count</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    {editProduct?.id === product.id ? (
                                        <>
                                            <td>{product.id}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={editProduct.name}
                                                    onChange={(e) =>
                                                        setEditProduct({ ...editProduct, name: e.target.value })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={editProduct.price}
                                                    onChange={(e) =>
                                                        setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={editProduct.description}
                                                    onChange={(e) =>
                                                        setEditProduct({ ...editProduct, description: e.target.value })
                                                    }
                                                />
                                            </td>
                                            <td><input
                                                    type="number"
                                                    value={editProduct.count}
                                                    onChange={(e) =>
                                                        setEditProduct({ ...editProduct, count: e.target.value })
                                                    }
                                                /></td>
                                            <td>
                                                <button onClick={handleUpdate}>Save</button>
                                                <button onClick={() => setEditProduct(null)}>Cancel</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td>{product.count}</td>
                                            <td>
                                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                                                <button onClick={() => handleEdit(product)}>Edit</button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>There are no products</p>
                )}
            </section>
        </main>
    );
};

export default AdminPanel;
