import React from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const SingleAllInventory = ({ car, isLoading, isError, error }) => {
    const navigate = useNavigate()
    // console.log("car", car)
    const { name, image, description, price, quantity, supplierName, _id } = car

    const stockupdate = (id) => {
        console.log("Id holo", id)
        navigate(`${id}`)
    }

    const handledelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `http://localhost:5000/inventory/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.deletedCount > 0) {
                                console.log(data, "Success to delete")
                                navigate("/inventory")
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!")
                }
            })
    }


    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
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
                </div>
                <div className='flex justify-center items-center '>
                    <button onClick={() => stockupdate(_id)} className='btn btn-info my-4 w-1/3  mx-auto'><span className='text-white'>Stock Update</span></button>
                    <button onClick={() => handledelete(_id)} className='btn btn-error my-4 w-1/3  mx-auto'><span className='text-white'>Delete Item</span></button>

                </div>
            </div>

        </div>
    )
}

export default SingleAllInventory