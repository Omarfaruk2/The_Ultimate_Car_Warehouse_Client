import { Icon } from '@iconify/react'
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
        <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="600"
            className='mx-auto'>

            <div className="card w-11/12 mx-auto bg-base-100 mt-8 card-shadow">


                <figure><img src={image} alt="Shoes" /></figure>

                <div className="card-body px-8 pt-5 pb-6">
                    <h2 className="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="badge badge-info">NEW</div>
                    </h2>
                    <p>{description.slice(0, 180)}.</p>
                    <div className="card-actions mt-4 justify-end">
                        <p className='text-xl'> <b>Price:$ </b>{price}</p>
                        <p className='text-xl'><b >Quantity:</b> {quantity}</p>
                        <p className='text-xl'><b>SupplierName:</b> {supplierName}</p>
                    </div>

                    {/* <div className='grid grid-cols-2 mt-2'>
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
                    </div> */}
                    <button onClick={() => stockupdate(_id)} className='btn btn-info mt-4 w-3/5 mx-auto'><span className='text-white'>Stock Update</span></button>


                </div>


                {/* <div className="card-body">
                    <h2 className="card-title">
                        <p>Name: {name}</p>
                        <div className="badge badge-info">NEW</div>
                    </h2>
                    <p>{description.slice(0, 180)}.</p>
                    <div className="card-actions justify-end">
                        <p> <b>Price:$ </b>{price}</p>
                        <p><b>Quantity:</b> {quantity}</p>
                        <p><b>SupplierName:</b> {supplierName}</p>
                    </div>
                    <button onClick={() => stockupdate(_id)} className='btn btn-info mt-4 w-3/5 mx-auto'><span className='text-white'>Stock Update</span></button>
                </div> */}



            </div>
        </div>
    )
}

export default SingleInventroy