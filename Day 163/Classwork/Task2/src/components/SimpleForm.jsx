import useForm from "../hooks/useForm";

const SimpleForm = () => {
    const initialState = { name: "", email: "" };
    const [formData, handleChange, handleSubmit] = useForm(initialState);

    const onSubmit = (data) => {
        alert(`Name: ${data.name}, Email: ${data.email}`);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                />
            </div>
            <div>

                <label>Email</label>
                <input type="email"name="email" value={formData.email} onChange={handleChange}
                />
                
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default SimpleForm;
