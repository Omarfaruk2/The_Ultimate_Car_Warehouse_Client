import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
import "./Additems.css"
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'

const Additems = () => {

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()


    if (loading) {
        return <Loading></Loading>
    }


    const onSubmit = (data) => {
        console.log(data)

        const url = "https://warm-taiga-97321.herokuapp.com/inventory"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {


                if (result.insertedId);
                data = {}
                navigate('/inventory')
            })
    }


    return (
        <div className=''>
            <div>
                <div className="card lg:card-side lg:w-3/5 sm:w-5/6 mb-20 mx-auto bg-base-100 card-shadow">
                    <div className="card-body ">
                        <h2 className='text-center text-3xl font-serif'>Stock Your Product</h2>

                        {/* ------ */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                                {/* supplierName */}
                                <div className="form-control w-full max-w-xs mx-auto">
                                    <label className="label">
                                        <span className="label-text">Supplier Name</span>
                                    </label>
                                    <input   {...register("supplierName", { required: true })} type="text" placeholder="Type here" className="input input-bordered bg-slate-100 mx-auto  input-info  w-full " />
                                </div>

                                {/* Item Name */}
                                <div className="form-control w-full max-w-xs  mx-auto">
                                    <label className="label">
                                        <span className="label-text">Items Name</span>
                                    </label>
                                    <input  {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-full max-w-xs" />
                                </div>

                                {/* quantuty */}
                                <div className="form-control w-full max-w-xs mx-auto">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input  {...register("quantity", { required: true })} type="number" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-full max-w-xs" />
                                </div>

                                {/* price */}
                                <div className="form-control w-full max-w-xs mx-auto">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input  {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-full max-w-xs" />
                                </div>

                            </div>
                            {/* ------------------------------------------------------------------------------------------------------------- */}
                            <div>

                                {/* Email */}
                                <div className="form-control sm:w-full lg:w-11/12 mx-auto lg:ml-12">
                                    <label className="label">
                                        <span className="label-text">Your Mail</span>
                                    </label>
                                    <input value={user?.email}  {...register("email", { required: true })} className="input input-bordered bg-slate-100 input-info w-11/12" />
                                </div>

                                {/* Photo url */}
                                <div className="form-control lg:w-11/12 mx-auto lg:ml-12 ">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input  {...register("image", { required: true })} type="url" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-11/12" />
                                </div>

                                {/* dexcription */}
                                <div className="form-control lg:w-11/12 mx-auto lg:ml-12">
                                    <label className="label">
                                        <span className="label-text">Description?</span>
                                    </label>
                                    {/* <input  {...register("description", { required: true })} type="textarea" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-11/12" /> */}

                                    <textarea  {...register("description", { required: true })} type="text" placeholder="Type here" className="input input-bordered bg-slate-100    input-info w-11/12" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-info mt-4 lg:ml-12 lg:w-1/5 sm:w-full">Submit</button>

                        </form>
                        {/* ----- */}
                        <p className='text-center font-bold'>Fill up the form carefully to stock your product.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additems