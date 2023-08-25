import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-red-600">
                <div className="flex-1">
                    <a className="btn btn-ghost text-white normal-case text-xl">Book Mania</a>
                </div>
                <div className="flex-none text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allbooks'>All Books</Link></li>
                        <li><a>Sign Up</a></li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;