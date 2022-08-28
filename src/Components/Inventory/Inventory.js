import React from 'react'
import "./Inventory.css"
import { useQuery } from 'react-query'
import fetchPosts from './FetchApi'
import SingleInventroy from './SingleInventroy'
import { Link, useNavigate } from 'react-router-dom'


const Inventory = () => {
    const navigate = useNavigate()

    const checkout = () => {
        navigate("/inventory")
    }

    const { data, error, isError, isLoading } = useQuery('users', fetchPosts)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (data) {
        // console.log("data", data)
    }

    return (

        <div className=''>
            <h2 className='text-center text-3xl font-mono my-5'>Inventory Items</h2>
            <div className='grid grid-cols-3 mx-auto gap-y-5'>
                {
                    data?.slice(0, 6)?.map(car => <SingleInventroy
                        car={car}
                        key={car?._id}
                    >
                    </SingleInventroy>)
                }
            </div>

            <p className='text-center mt-5 p-0 '>
                <Link to='/inventory'>
                    <button onClick={() => checkout()} className="btn btn-info">Checkout All Inventory <span className='text-3xl mb-1'>→</span></button>
                </Link>
            </p>



        </div>
    )
}

export default Inventory