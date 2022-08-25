import React from 'react'
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import loginimg from "../../img/login.png"
import { useForm } from "react-hook-form"

const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)

    const onSubmit = (data) => {

        signInWithEmailAndPassword(data?.email, data?.password)
        console.log(data)

    }

    if (loading || gloading) {
        return <p>Loading......</p>
    }
    if (user || guser) {
        navigate("/")
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
                    <div className="card lg:card-side  w-3/4 mx-auto mt-8 shadow-xl grid lg:grid-cols-2 sm:grid-cols-1 ">
                        <figure className='orderImg'>
                            <img className='w-full' src={loginimg} alt="Album" />
                        </figure>

                        {/* From */}
                        <div className="card-body fromOrder">

                            <h2 className="card-title login-text">Log In</h2>
                            <form className=' grid grid-cols-1 mt-10 gap-[.75rem]' onSubmit={handleSubmit(onSubmit)}>
                                {/* <input placeholder='Your Name' {...register("name", { required: true })} />

                                {errors?.name?.ref?.minLength === 'required' && "First name is required"} */}

                                <input placeholder='Your Email' {...register("email", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}

                                <input placeholder='Your Password' type="password" {...register("password", { required: true, minLength: 6 })} />
                                <p>{errors.mail?.message}</p>

                                {/* <input type="submit" /> */}
                                <div>
                                    <p className='text-center'>
                                        <button type="submit" className="btn w-2/4 btn-info"><span className='text-violet-50'>Submit</span></button>
                                    </p>
                                </div>

                            </form>

                            <span>Are you new user ? <Link className='text-yellow-200 underline underline-offset-1' to="/signup ">Go to Sgn up.</Link> </span>

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


                                            className='btn btn-primary mx-auto'>
                                            <img src="" alt="" /> Login With Google
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