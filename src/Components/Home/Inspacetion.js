import { Icon } from '@iconify/react'
import React from 'react'
import { useQuery } from 'react-query'
import "./Insfaction.css"



import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()



const Inspacetion = () => {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('insfaction.json').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message




    return (
        <div className='h-[80vh] my-20'>
            <h2
                data-aos="flip-left"
                className='text-center text-3xl mt-11 font-semibold'>Our Inspacetion </h2>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1  my-8  mx-auto'>
                <div >
                    <img className='hover:animate-spin'
                        data-aos="fade-right"
                        // data-aos-anchor="#example-anchor"
                        data-aos-offset="100"
                        data-aos-duration="600"
                        src="https://templates.scriptsbundle.com/carspot/demos/images/car-in-red.png" alt="" />
                </div>

                <div className='ml-5
                '>

                    <span className='text-2xl font-mono text-center'>Want To Sale Your Car ?
                        <div className='flex'>
                            <img className="hover:animate-spin" width="60px" src="https://pngimg.com/uploads/car_wheel/car_wheel_PNG23298.png" alt="" />



                            <img className="hover:animate-spin" width="60px" src="https://www.freeiconspng.com/thumbs/car-tire-png/car-wheel-png-image-free-download--car-wheel-png-image-free--11.png" alt="" />
                        </div>

                    </span> <br />
                    <span className='text-3xl font-bold text-center'>CAR INSPECTION</span> <br /> <br />

                    <p>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace of mind before buying.
                    </p>

                    <div className='grid grid-cols-3 mark-ul  lg:mt-6'>
                        {
                            data?.map(singledata =>
                                <ul
                                    key={singledata?._id}
                                    className='py-2 inline sm:ml-5'> <Icon className='inline mx-2' icon="emojione:white-heavy-check-mark" />
                                    <span> {singledata?.name}</span></ul>
                            )
                        }
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Inspacetion