import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Stock.css"
import swal from 'sweetalert'

import { useQuery } from 'react-query'
import fetchPostsCar from "./FetchUpdateCarApi"

const StockUpdate = () => {

    const { id } = useParams()
    const [car, setCard] = useState("")

    const [message, setMessage] = useState('')
    const isAnonymous = true



    // const { data, error, isError, isLoading } = useQuery(['userscar'], id, fetchPostsCar)

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }
    // if (isError) {
    //     return <div>Error! {error.message}</div>
    // }
    // if (data) {
    //     console.log("data", data)
    // }


    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [id])

    // console.log(car, "car")

    const { name, image, description, price, quantity, supplierName, _id } = car || {}

    const handleDelivered = (id) => {

        const productQuantity = car.quantity
        const newQuantity = productQuantity - 1
        console.log(newQuantity)

        const url = `http://localhost:5000/inventory/${id}`
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

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
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

            // console.log(e.currentTarget.disabled, "target")
            const previousStock = car.quantity
            let fieldStock = parseInt(e.target.number.value)

            const newQuantity = previousStock + fieldStock

            const url = `http://localhost:5000/inventory/${id}`
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

                    // console.log(e.target.reset(0))

                    e.target.reset()
                    // e.target.number.value = ''

                })
                .catch((error) => {
                    console.error(error)
                })
        }




    }









    return (
        <div>
            <h2>Hello {id}</h2>
            <div className='lg:h-[140vh]'>
                <div className="card lg:h-[120vh] flex justify-center items-center lg:card-side lg:w-4/5 mx-auto shadow-xl">
                    <figure><img className='w-5/6' src={image} alt="Album" /></figure>

                    <div className="card-body mt-20 ">
                        <h2 className="card-title">{name}</h2>
                        <span>{description}</span>
                        <div className='grid grid-cols-1 gap-4'>
                            <span className=''><b>ID: $</b> {id}</span>
                            <span className='text-lg'><b>Price: $</b> {price}</span>
                            <span className='text-lg'><b>SupperName:</b> {supplierName}</span>
                            <div>
                            </div>
                        </div>

                        {/* delivered items */}

                        <div className='flex justify-center items-center gap-x-5 stock-input'>
                            <span className='text-xl'><b>Quantity:</b> {quantity}</span>
                            <button onClick={() => handleDelivered(_id)} className='btn btn-info'> Delivered</button>
                        </div>

                        {/* stock update */}

                        <span className='text-center text-2xl'>Stock Update</span>
                        <div className='flex justify-center items-center  stock-input'>

                            <form onSubmit={handleRestock} >
                                <input
                                    name="number"
                                    type="number"
                                    placeholder="Type here"

                                    // end 
                                    id="message"
                                    // name="message"
                                    // value={message}
                                    // onChange={event => setMessage(event.target.value)}
                                    // end


                                    className="input input-bordered input-info mx-2 w-1/2 max-w-xs" />
                                <button
                                    // disabled={!message}
                                    // disabled={isAnonymous ? true : false}
                                    className='btn btn-warning mx-2'> Stock Update</button>
                            </form>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockUpdate

// admin
// 77NMbdKezJB60e6A

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:<password>@cluster0.odsjfxq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


