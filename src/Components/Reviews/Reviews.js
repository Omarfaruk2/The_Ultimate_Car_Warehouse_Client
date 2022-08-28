import React, { useEffect, useState } from 'react'
import "./Review.css"
import SingleReviews from './SingleReviews'

const Reviews = () => {

    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log("first", reviews)

    return (
        <div>
            <h2 className='text-4xl text-center font-serif my-12 text-sky-400'>The latest new car releases and expert reviews</h2>
            <div className='grid grid-cols-4 mb-9 gap-4 w-11/12 mx-auto'>
                {
                    reviews?.map(review => <SingleReviews
                        review={review}
                        key={review._id}
                    >

                    </SingleReviews>)
                }
                {/* <h2 className='text-4xl text-center font-semibold'>The latest new car releases and expert reviews</h2>
            <div className='grid grid-cols-4'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>
        </div>
    )
}

export default Reviews