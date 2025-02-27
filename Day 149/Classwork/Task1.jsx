// 1) შექმენით ფორმა სადაც გექნებათ 4 ინფუთ ელემენტი, თქვენი დავალებაა რომ შექმნათ ერთი მდგომარეობა, რომსელაც გამოიყენებთ 4 ინფუთისთვის + როგორც კი მდგომარეობა შეიცვლება ეგრევე უნდა გამოიტანოთ ამჟამინდელი მნიშვნელობები პარაგრაფებში მაგალითად email: value, pass, firstname და lastname

const Register = () => {
    const [formState, setFormState] = useState({
        email: "",
        firstname: "",
        lastname: "",
    });

    const handleChange = ({ target }) => {
        target.preventDefault();
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };


    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    value={formState.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formState.firstname}
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formState.lastname}
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    required
                />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>

            <p>Email: {formState.email}</p>
            <p>Firstname: {formState.firstname}</p>
            <p>Lastname: {formState.lastname}</p>
        </div>
    );
};

export default Register;
