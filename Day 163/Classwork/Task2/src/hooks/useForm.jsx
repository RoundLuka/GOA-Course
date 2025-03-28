import { useState } from "react";

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        callback(formData);
    };

    return [formData, handleChange, handleSubmit];
};

export default useForm;
