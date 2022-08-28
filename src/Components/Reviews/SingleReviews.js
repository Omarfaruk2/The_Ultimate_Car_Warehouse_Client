import React from 'react'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SingleReviews = ({ review }) => {

    const { image, peoplereview, reviewimg, rating, reviewwork } = review

    return (
        <div >
            <div className='mb-4'>
                <div className="card w-full  bg-base-100 card-shadow">
                    <figure><img className='' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p className='text-2xl font-semibold'>{peoplereview}</p>
                    </div>
                    <div className='flex p-3 gap-2 items-center justify-center'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <img src={reviewimg} />
                            </div>
                        </div>
                        <div>
                            {/* <span>{peoplereview}</span> */}
                            <span>{reviewwork}</span> <br />


                            <span>Rating : {rating}
                                <Rating
                                    initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />} readonly
                                ></Rating>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleReviews