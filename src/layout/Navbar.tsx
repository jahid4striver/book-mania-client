import auth from "@/auth/firebase.config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [user] = useAuthState(auth)
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
                        <li><Link to='/wishlist'>My Wishlist</Link></li>
                        <li><Link to='/addnewbook'>Add New Book</Link></li>
                        {!user?.email && <li><Link to='/signup'>Sign Up</Link></li>}
                        {user?.email ? <li><Link onClick={() => signOut(auth)} to=''>Log Out</Link></li> : <li><Link to='/login'>Login</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;