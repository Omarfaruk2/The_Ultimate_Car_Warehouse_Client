import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import "./Navbar.css"
import { signOut } from 'firebase/auth'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)

    const logout = () => {
        signOut(auth)
    }

    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/additems">Add Items</Link></li>
            <li><Link to="/myitems">My Items</Link></li>
            <li><Link to="/blog">Blog</Link></li>

            {/* <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li> */}




            <li>
                {user ?
                    <button onClick={logout}
                        className="btn btn-ghost">Sign Out</button>
                    : <Link to="/login">Login</Link>
                }
            </li>

        </>


    return (
        <div className=''>
            <div data-aos="fade-down" data-aos-duration="2000" className="navbar navbar-head ">
                <div className="navbar-start">

                    <h3 className=" w-20 h-16 my-auto lg:ml-24 ml-6  normal-case text-xl">
                        <img src="https://i.ibb.co/Nj5GD1L/6558e0f6d14195c7e8893728011b2f30-removebg-preview.png" alt="" />
                    </h3>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end mr-6'>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-accent lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content menuNaving  mt-3 py-2 px-3  shadow bg-base-100 rounded-box ">
                            {/* w-32 mr-16 mt-3 py-2 px-3  */}
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle bg-black avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjwj1yppV84f2OuEzO1R_FX_Ov5yF-92d2Q&usqp=CAU" alt="" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li
                        // onClick={handleprofile}
                        >

                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>

                        <li><button className='btn btn-xs btn-ghost pb-6'>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar