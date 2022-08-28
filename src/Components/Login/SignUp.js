import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./SignUp.css"
import loginimg from "../../img/login.png"
import { useForm } from "react-hook-form"
import auth from '../../firebase.init'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'


const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [displayName, setDisplayName] = useState('')
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)


    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data?.email, data?.password)
        // console.log(data);
        await updateProfile({ displayName })
        alert('Updated profile')
    }

    if (loading || updating || gloading) {
        return <p>Loading......</p>
    }
    if (user || guser) {
        navigate("/")
    }


    if (error || updateError || gerror) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }





    return (
        <div>
            <div>
                <div className='login-head'>
                    <div className='pt-10'>
                        <div className="card lg:card-side  w-3/4 mx-auto mt-8  showdow-card grid lg:grid-cols-2 sm:grid-cols-1 ">
                            <figure className='orderImg'>
                                <img className='w-full' src={loginimg} alt="Album" />
                            </figure>

                            {/* From */}
                            <div className="card-body fromOrder">

                                <h2 className="card-title text-emerald-500">Sign Up</h2>

                                <form className=' grid grid-cols-1 gap-[.75rem] mt-10' onSubmit={handleSubmit(onSubmit)}>



                                    <input onChange={(e) => setDisplayName(e.target.value)} type="text" placeholder="Type Your Name" class="input input-bordered input-accent w-full max-w-xs" {...register("name", { required: true, minLength: 1, maxLength: 50 })} />

                                    {/* {errors?.name?.ref?.minLength === 'required' && "First name is required"} */}

                                    {/* <input placeholder='Your Email' {...register("email", { required: true })} /> */}

                                    <input type="email" class="input input-bordered input-accent w-full max-w-xs" placeholder='Type Your Email' {...register("email", { required: true })} />
                                    {errors.lastName && <p>Last name is required</p>}


                                    <input placeholder='Type  Your Password' class="input input-bordered input-accent w-full max-w-xs" type="password" {...register("password",
                                        { required: true, minLength: 6 })} />
                                    <p>{errors.mail?.message}</p>

                                    {/* <input type="submit" /> */}
                                    <div>
                                        <p className='text-center'>
                                            <button type="submit" className="btn w-2/4 btn-info"><span className='text-violet-50'>Submit</span></button>
                                        </p>
                                    </div>
                                </form>
                                <span>Already have an account? <Link className='underline underline-offset-1 text-green-800' to="/login ">Go to Login</Link> </span>

                                {/* or */}

                                <div>
                                    <div className='or'>
                                        <hr />
                                        <span className='mx-2 fw-bold'>Or</span>
                                        <hr />
                                    </div>

                                    {/* Login google */}

                                    <div className='d-flex justify-contant-center align-items-center'>
                                        <p className='text-center'>
                                            <button
                                                onClick={() => signInWithGoogle()}


                                                className='btn btn-info mx-auto'>
                                                <img className='mr-3' src="https://i.ibb.co/hMzyqvP/googlelo.png" alt="" /> Login With Google
                                            </button>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp