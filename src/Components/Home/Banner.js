import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./Banner.css"

const Banner = () => {

    return (
        <div>
            <Carousel className='m-0 p-0'>

                <div className='banner-div-one flex justify-start items-center'>
                    <div className="card lg:w-1/3 sm:w-full backgroun-card lg:ml-10 shadow-xl">
                        <div className="card-body text-white">
                            <h2 className="card-title text-5xl">Road World Class</h2>
                            <p className=' mt-3'>Your recent column about someone's new vehicle not fitting into an existing garage reminded me of the fix my grandfather made.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info ">Buy Now</button>
                                {/* class="hover:animate-spin" */}
                            </div>
                        </div>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='banner-div-two flex justify-start items-center'>
                    <div className="card lg:w-1/3 sm:w-full backgroun-card lg:ml-10 shadow-xl">
                        <div className="card-body text-white">
                            <h2 className="card-title text-5xl">Road World Class</h2>
                            <p className=' mt-3'>Your recent column about someone's new vehicle not fitting into an existing garage reminded me of the fix my grandfather made.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='banner-div-three flex justify-start items-center'>
                    <div className="card lg:w-1/3 sm:w-full backgroun-card lg:ml-10 shadow-xl">
                        <div className="card-body text-white">
                            <h2 className="card-title text-5xl">Road World Class</h2>
                            <p className=' mt-3'>Your recent column about someone's new vehicle not fitting into an existing garage reminded me of the fix my grandfather made.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info">Stock Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>


            </Carousel>
        </div>
    )
}

export default Banner