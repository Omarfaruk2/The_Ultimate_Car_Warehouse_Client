import { Icon } from '@iconify/react'
import React from 'react'
import { useQuery } from 'react-query'

const Inspacetion = () => {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('insfaction.json').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message




    return (
        <div className='h-[80vh]'>
            <h2
                data-aos="flip-left"
                className='text-center text-3xl mt-11 font-semibold'>This is inspacetion page</h2>
            <div className='grid grid-cols-2 my-8 lg:w-5/6 mx-auto'>
                <div >
                    <img data-aos="flip-left" src="https://templates.scriptsbundle.com/carspot/demos/images/car-in-red.png" alt="" />
                </div>
                <div>
                    <div>
                        <span className='text-2xl font-mono'>Want To Sale Your Car ?</span> <br />
                        <span className='text-3xl font-bold '>CAR INSPECTION</span> <br /> <br />

                        <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace of mind before buying.
                        </p>

                        <div className='grid grid-cols-3 mt-6'>
                            {
                                data?.map(singledata =>
                                    <ul className='py-2'> <Icon className='inline mx-2' icon="emojione:white-heavy-check-mark" />
                                        {singledata?.name}</ul>
                                )
                            }

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspacetion