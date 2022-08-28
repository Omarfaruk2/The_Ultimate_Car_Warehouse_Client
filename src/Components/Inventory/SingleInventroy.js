import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SingleInventroy.css"

const SingleInventroy = ({ car }) => {
    const navigate = useNavigate()

    const { _id, name, image, description, price, quantity, supplierName } = car

    const stockupdate = (id) => {
        console.log("Id holo", id)
        navigate(`inventory/${id}`)
    }



    return (
        <div className='mx-auto'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <p>Name: {name}</p>
                        <div className="badge badge-info">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <p> <b>Price:$ </b>{price}</p>
                        <p><b>Quantity:</b> {quantity}</p>
                        <p><b>SupplierName:</b> {supplierName}</p>
                    </div>
                    <button onClick={() => stockupdate(_id)} className='btn btn-info mt-4 w-3/5 mx-auto'><span className='text-white'>Stock Update</span></button>
                </div>
            </div>
        </div>
    )
}

export default SingleInventroy