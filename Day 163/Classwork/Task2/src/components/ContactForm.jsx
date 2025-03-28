import useForm from "../hooks/useForm";

const ContactForm = () => {
    const initialState = { fullName: "", phone: "" };
    const [formData, handleChange, handleSubmit] = useForm(initialState);

    const onSubmit = (data) => {
        alert(`Full Name: ${data.fullName}, Phone: ${data.phone}`);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <div>
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                />
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
