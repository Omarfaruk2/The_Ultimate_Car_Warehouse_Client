import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import "./Myitems.css"
import swal from 'sweetalert'
import { useState } from 'react'
import { useEffect } from 'react'
import Row from './Row'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Myitems = () => {

    const [user, loading] = useAuthState(auth)
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    const email = user?.email


    useEffect(() => {


        const getOrders = async () => {

            if (loading) {
                return <p>loading........</p>
            }
            const url = `https://no-problem.onrender.com/myitems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setProduct(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()



    }, [user])




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
                    const url = `https://no-problem.onrender.com/inventory/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.deletedCount > 0) {

                                const remaining = product?.filter((data) => data._id !== id)
                                setProduct(remaining)
                                console.log("success")
                            }

                        })
                } else {
                    swal("Your imaginary file is safe!")
                }
            })
    }



    return (

        <div>
            <div className="overflow-x-auto h-[80vh]">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>ON</th>
                            <th>Product Name</th>
                            <th>Price </th>
                            <th>Quantity</th>
                            <th>SupplierName</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product?.map((order, index) => (
                            <Row
                                order={order}
                                key={order._id}
                                index={index}
                                setProduct={setProduct}
                                handledelete={handledelete}
                            ></Row>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


        // <div className='h-[100vh] lg:w-11/12 sm:w-4/12 overflow-auto'>
        //     <h2 className="text-center">my items</h2>

        //     <table className='mx-auto '>
        //         <thead>
        //             <tr className='table-tr'>
        //                 <th></th>
        //                 <th>Product Name</th>
        //                 <th>Price:</th>
        //                 <th>Quantity :</th>
        //                 <th>SupplierName</th>
        //                 <th>Image</th>
        //                 <th>Delete</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 product?.map((value, index, key) => {
        //                     const { name, image, description, price, _id, quantity, supplierName } = value || {}
        //                     return (
        //                         <tr className='table-td'
        //                             key={key}>
        //                             <td>{index + 1}</td>
        //                             <td>{name}</td>
        //                             <td>{price}</td>
        //                             <td>{quantity}</td>
        //                             <td>
        //                                 {supplierName}
        //                             </td>
        //                             <td>
        //                                 <img width="60px" src={image} alt="" />
        //                             </td>
        //                             <td>
        //                                 <button onClick={() => handledelete(_id)} className='btn btn-error'>Delete</button>
        //                             </td>
        //                         </tr>
        //                     )
        //                 })
        //             }
        //         </tbody>
        //     </table>
        // </div>


    )
}

export default Myitems