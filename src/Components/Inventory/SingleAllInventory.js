import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import swal from 'sweetalert'
import "./SingleInventroy.css"
import { Icon } from '@iconify/react'
import auth from '../../firebase.init'

const SingleAllInventory = ({ car, isLoading, isError, cars, setCars }) => {

    const [, uloading] = useAuthState(auth)
    const navigate = useNavigate()

    if (isLoading || uloading || isError || !car) {
        return <p>Loading........</p>
    }
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
                                const remaining = cars.filter((data) => data._id !== id)
                                setCars(remaining)
                                console.log("success")
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
        return <div>Error!</div>
    }
    return (
        <div className='mx-auto'>

            <div className="card w-11/12 mx-auto bg-base-100 mt-8 card-shadow">

                <figure><img src={image} alt="Shoes" /></figure>

                <div className="card-body px-8 pt-5 ">
                    <h2 className="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="badge badge-info">NEW</div>
                    </h2>
                    <p>{description?.slice(0, 180)}.</p>
                    <div className="card-actions mt-4 justify-end">
                        <p className='text-xl'> <b>Price:$ </b>{price}</p>
                        <p className='text-xl'><b >Quantity:</b> {quantity}</p>
                        <p className='text-xl'><b>SupplierName:</b> {supplierName}</p>
                    </div>

                    <div className='grid grid-cols-2 mt-2'>
                        <div className='flex items-center justify-center'>
                            <Icon className='text-3xl text-gray-400'
                                icon="bi:fuel-pump-diesel-fill"
                            />
                            <span className='mx-4 font-bold'>Diesel</span>
                        </div>
                        <div className='flex items-center justify-center ml-5'>
                            <Icon className='text-6xl text-gray-400'
                                icon="mdi:car-speed-limiter"
                            />
                            <span className='mx-4 font-bold'>Speed :450 Km/h</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Icon className='text-3xl text-gray-400'
                                icon="fluent:engine-24-filled" />
                            <span className='mx-4 font-bold'>Engine</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Icon className='text-3xl text-gray-400'
                                icon="ant-design:setting-twotone" />
                            <span className='mx-4 font-bold'>White</span>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center items-center pb-5'>
                    <button onClick={() => stockupdate(_id)} className='btn btn-info my-4 w-1/3  mx-auto'><span className='text-white'>Stock Update</span></button>
                    <button onClick={() => handledelete(_id)} className='btn btn-error my-4 w-1/3  mx-auto'><span className='text-white'>Delete Item</span></button>

                </div>
            </div>

        </div>
    )
}

export default SingleAllInventory