import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import "./Navbar.css"
import { signOut } from 'firebase/auth'
// import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    // console.log(user)


    const logout = () => {
        signOut(auth)
        navigate("/login")
    }

    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>

            {
                user && <>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/additems">Add Items</Link></li>
                    <li><Link to="/myitems">My Items</Link></li>
                </>
            }


            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/task">Task</Link></li>



            <li>
                {user ?
                    <button onClick={logout}
                        className="btn btn-ghost text-neutral-focus logout-text">Sign Out</button>
                    : <Link to="/login">Login</Link>
                }
            </li>

        </>


    return (
        <div className=''>
            <div
                // data-aos="fade-down" data-aos-duration="2000" 
                className="navbar bg-slate-800 ">
                <div className="navbar-start">

                    <h3 className=" w-20 h-16 my-auto lg:ml-24 ml-6  normal-case text-xl">
                        <img src="https://i.ibb.co/Nj5GD1L/6558e0f6d14195c7e8893728011b2f30-removebg-preview.png" alt="" />
                    </h3>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal header-nav p-0">
                        {menuItems}
                    </ul>
                </div>


                <div className='navbar-end mr-8'>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-accent lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content 
                         menuNaving   
                          
                          shadow bg-base-100 rounded-box ">
                            {/* w-32 mr-16 mt-3 py-2 px-3  */}
                            {menuItems}
                        </ul>
                    </div>
                </div>


                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle  avatar">
                        <div className="w-10 rounded-full">


                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt="" />
                                    :

                                    <img src="data:image/png;base64,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" alt="" />
                            }

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

                        <li><button className='btn  btn-ghost pb-6'><span className='logout-text'>Logout</span></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar