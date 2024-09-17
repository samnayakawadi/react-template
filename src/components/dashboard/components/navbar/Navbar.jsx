const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-700 to-purple-800 shadow-2xl p-4 py-3 rounded-md">
            <div className="navbar">
                <div className="navbar-start">
                    <h1 className="text-3xl font-bold text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                        DIPTI
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-200 ml-6 pl-6 border-l-2 border-purple-300">Dashboard</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-4">
                        <li>
                            <a href={`#`}
                                className="text-white hover:text-purple-200 transition duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-purple-600">
                                Return to Home
                            </a>
                        </li>
                        <li className="rounded-lg">
                            <a href={`#`}
                                className="text-white hover:text-purple-200 transition duration-300 ease-in-out px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-md">
                                Back To Content Delivery
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="text-white mr-6 font-medium">Welcome, Samir Nayakawadi</span>
                    <a href={`#`}
                        rel="noreferrer"
                        className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-none shadow-md transition duration-300 ease-in-out">
                        Logout
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar