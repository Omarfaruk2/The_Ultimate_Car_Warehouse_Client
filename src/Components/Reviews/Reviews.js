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

    console.log("first", reviews)

    return (
        <div>
            <h2 className='text-4xl text-center font-serif my-12 text-sky-400'>The latest new car releases and expert reviews</h2>
            <div className='grid grid-cols-4 gap-4 w-11/12 mx-auto'>
                {
                    reviews?.map(review => <SingleReviews
                        review={review}
                        key={review._id}
                    >

                    </SingleReviews>)
                }
                {/* <h2 className='text-4xl text-center font-semibold'>The latest new car releases and expert reviews</h2>
            <div className='grid grid-cols-4'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>
        </div>
    )
}

export default Reviews