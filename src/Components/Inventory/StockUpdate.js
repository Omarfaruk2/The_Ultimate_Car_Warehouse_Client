import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Stock.css"
import swal from 'sweetalert'

import { useQuery } from 'react-query'
import fetchPostsCar from "./FetchUpdateCarApi"
import { Icon } from '@iconify/react'

const StockUpdate = () => {

    const { id } = useParams()
    const [car, setCard] = useState("")

    const [message, setMessage] = useState('')
    const isAnonymous = true



    useEffect(() => {
        fetch(`https://no-problem.onrender.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [id])

    if (!car) {
        return <p className='text-center mx-auto h-[80vh]'><progress className="progress w-1/4 mt-20"></progress></p>

    }

    // console.log(car, "car")

    const { name, image, description, price, quantity, supplierName, _id } = car || {}


    const handleDelivered = (id) => {
        const productQuantity = car.quantity
        const newQuantity = productQuantity - 1
        console.log(newQuantity)

        const url = `https://no-problem.onrender.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ newQuantity }),
        })

            .then((res) => res.json())
            .then((data) => {
                const quantity = newQuantity
                const updateStock = { ...car, quantity }
                setCard(updateStock)
            })
    }
    //------------------------- stock update--------------------------

    const modal = () => {
        return <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label for="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    }

    const handleRestock = (e) => {

        e.preventDefault()
        if (!e.target.number.value) {
            swal({
                title: "Your Input Field is Empty!",
                icon: "warning",
                dangerMode: true,
            })

        }
        else if (e.target.number.value) {

            e.currentTarget.disabled = true
            const previousStock = car.quantity
            let fieldStock = parseInt(e.target.number.value)

            const newQuantity = previousStock + fieldStock

            const url = `https://no-problem.onrender.com/inventory/${id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ newQuantity }),
            })
                .then((res) => res.json())
                .then((data) => {
                    const quantity = newQuantity
                    const updatedQuantity = { ...car, quantity }
                    setCard(updatedQuantity)
                    e.target.reset()
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }

    return (
        <div className=''>

            <div className='lg:h-[110vh]'>
                <div className="card lg:h-[110vh] grid lg:grid-cols-5 sm:grid-cols-1 lg:card-side lg:w-10/12 mx-auto card-shadow lg:p-10 sm:p-5">
                    <figure className='lg:col-span-2 mx-auto'>
                        <img
                            data-aos="zoom-in" data-aos-duration="1500"
                            className='sm:w-1/2  lg:w-full' src={image} alt="Album" />

                    </figure>

                    <div className="card-body mt-20 lg:col-span-3">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title">{name}</h2>
                            <div data-aos="zoom-in" data-aos-duration="1000" className='social flex gap-3'>
                                <Icon icon="ic:round-facebook" />
                                <Icon icon="bxl:instagram-alt" />
                                <Icon icon="ant-design:twitter-circle-filled" />
                                <Icon icon="bi:youtube" />
                            </div>
                        </div>

                        <span>{description}</span>
                        <div className='grid grid-cols-2 '>
                            <span className=''><b>ID: $</b> {id}</span>
                            <span className='text-lg'><b>Price: $</b> {price}</span>
                            <span className='text-lg'><b>SupperName:</b> {supplierName}</span>
                            <div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-2'>
                            <div className='flex part items-center justify-center'>
                                <Icon className='text-3xl text-gray-400'
                                    icon="bi:fuel-pump-diesel-fill"
                                />
                                <span className='mx-4 font-bold'>Diesel</span>
                            </div>
                            <div className='flex part items-center justify-center ml-14'>
                                <Icon className='text-4xl text-gray-400'
                                    icon="mdi:car-speed-limiter"
                                />
                                <span className='mx-4 font-bold'>Speed :450 Km/h</span>
                            </div>
                            <div className='flex part items-center justify-center'>
                                <Icon className='text-3xl text-gray-400'
                                    icon="fluent:engine-24-filled" />
                                <span className='mx-4 font-bold'>Engine</span>
                            </div>
                            <div className='flex part items-center justify-center'>
                                <Icon className='text-3xl text-gray-400'
                                    icon="ant-design:setting-twotone" />
                                <span className='mx-4 font-bold'>White</span>
                            </div>
                        </div>

                        {/* delivered items */}

                        <div className='flex justify-center items-center gap-x-5 stock-input p-4 lg:w-3/5 mx-auto'>
                            <span className='text-xl'><b>Quantity:</b> {quantity}</span>
                            <button onClick={() => handleDelivered(_id)} className='btn btn-info'> Delivered</button>
                        </div>

                        {/* stock update */}

                        <span className='text-center text-2xl'>Stock Update</span>
                        <div className='flex justify-center items-center  py-5 px-3 stock-input lg:w-3/5 mx-auto '>

                            <form onSubmit={handleRestock} >
                                <input
                                    name="number"
                                    type="number"
                                    placeholder="Type here"
                                    id="message"
                                    className="input input-bordered input-info w-1/2 max-w-xs" />
                                <button className='btn btn-black  mx-2'>Stock Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockUpdate


