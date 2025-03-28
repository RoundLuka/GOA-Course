import { Link } from 'react-router-dom';
const Navbar = () => (
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/blog">Blog</Link>
    </div>
);
export default Navbar;