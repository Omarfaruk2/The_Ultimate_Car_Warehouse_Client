import React from 'react'
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import loginimg from "../../img/login.png"
import { useForm } from "react-hook-form"

const Login = () => {


    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)

    const onSubmit = (data) => {

        signInWithEmailAndPassword(data?.email, data?.password)
        // console.log(data)
    }

    if (loading || gloading) {
        return <p>Loading......</p>
    }

    if (user || guser) {
        navigate(from, { replace: true })
    }


    if (error || gerror) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }


    return (
        <div>
            <div className='login-head'>
                <div className='pt-10'>
                    <div className="card lg:card-side  w-3/4 mx-auto mt-8 showdow-card grid lg:grid-cols-2 sm:grid-cols-1 ">
                        <figure className='orderImg'>
                            <img className='w-full' src={loginimg} alt="Album" />
                        </figure>

                        {/* From */}
                        <div className="card-body fromOrder">

                            <span className=" text-center login-text">Log In</span>
                            <form className=' grid grid-cols-1 mt-10 gap-[.75rem]' onSubmit={handleSubmit(onSubmit)}>

                                {/* <input placeholder='Your Email' {...register("email", { required: true })} /> */}

                                <input type="email" placeholder="Type Your Email" class="input input-bordered input-accent w-full max-w-xs"  {...register("email", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}



                                <input type="password" placeholder="Type Your Password" class="input input-bordered input-accent w-full max-w-xs" {...register("password", { required: true, minLength: 6 })} />
                                <p>{errors.mail?.message}</p>

                                {/* <input type="submit" /> */}
                                <div>
                                    <p className='text-center'>
                                        <button type="submit" className="btn w-2/4 btn-info"><span className='text-violet-50'>Submit</span></button>
                                    </p>
                                </div>

                            </form>

                            <span>Are you new user ? <Link className='text-black underline underline-offset-1' to="/signup ">Go to Sgn up.</Link> </span>

                            <div>
                                <div className='or'>
                                    <hr />
                                    <span className='mx-2 fw-bold'>Or</span>
                                    <hr />
                                </div>
                                <div className='d-flex justify-contant-center align-items-center'>
                                    <p className='text-center'>
                                        <button
                                            onClick={() => signInWithGoogle()}


                                            className='btn btn-info mx-auto mt-5'>
                                            <img src="https://i.ibb.co/hMzyqvP/googlelo.png" alt="" /> <span className='text-white mx-2 font-semibold'>Login With Google</span>
                                        </button>
                                    </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login