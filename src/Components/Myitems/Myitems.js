import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import "./Myitems.css"
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import SingleMyitems from './SingleMyitems'
import swal from 'sweetalert'


const Myitems = () => {

    const navigate = useNavigate()

    const [user] = useAuthState(auth)
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error } = useSWR(`http://localhost:5000/myitems/${user?.email}`, fetcher, {
        suspense: true
    })

    if (!data) {
        return <p>loading......</p>
    }



    // if (error) {
    //     return <p>Loading. {error}....</p>
    // }



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
                                navigate("/myitems")
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!")
                }
            })
    }



    return (
        <div className='h-[100vh] lg:w-11/12 sm:w-4/12 overflow-auto'>
            <h2 className="text-center">my items</h2>




            <table className='mx-auto '>
                <thead>
                    <tr className='table-tr'>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price:</th>
                        <th>Quantity :</th>
                        <th>SupplierName</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((value, index, key) => {
                            const { name, image, description, price, _id, quantity, supplierName } = value || {}
                            return (
                                <tr className='table-td'
                                    key={key}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{quantity}</td>
                                    <td>
                                        {supplierName}
                                    </td>
                                    <td>
                                        <img width="60px" src={image} alt="" />
                                    </td>
                                    <td>
                                        <button onClick={() => handledelete(_id)} className='btn btn-error'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Myitems