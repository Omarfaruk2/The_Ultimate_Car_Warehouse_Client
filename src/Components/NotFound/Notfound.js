import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Notfound.css"

const Notfound = () => {

    const navigate = useNavigate()
    return (
        <div className='navbar-head'>
            <div className='h-[80vh]'>
                {/* <h2 className="text-center">404 not fount page</h2> */}

                <div className=' pt-20'>
                    <div className="card w-3/5 mx-auto h-[60vh] bg-white text-black ">
                        <div className="card-body  items-center text-center">
                            <h2 className="card-title text-8xl">404</h2>
                            <h2 className='text-4xl font-semibold'><span className='text-red-600'>Oops!</span> Page Not Found </h2>
                            <p className='font-bold mt-5 text-xl'>The page you're looking doesn't exist.</p>
                            <div className="card-actions  justify-end">
                                <button onClick={() => navigate("/")} className="btn btn-info">GO HOME</button>
                                <button className="btn btn-secondary">FEEDBACK</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notfound