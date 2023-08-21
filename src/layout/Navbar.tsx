const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-green-400">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Book Mania</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>All Books</a></li>
                        <li><a>Sign Up</a></li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;