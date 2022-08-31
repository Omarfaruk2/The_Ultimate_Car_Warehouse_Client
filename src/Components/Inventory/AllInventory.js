import React, { useState } from 'react'
import "./Inventory.css"
import { useQuery } from 'react-query'
import fetchPosts from './FetchApi'
import SingleAllInventory from './SingleAllInventory'
import { useEffect } from 'react'

const AllInventory = () => {

    const { data, error, isError, isLoading } = useQuery('users', fetchPosts)


    const [cars, setCars] = useState()

    useEffect(() => {
        fetch("https://warm-taiga-97321.herokuapp.com/inventory")
            .then(res => res.json())
            .then(cardata => setCars(cardata))
    }, [])

    // console.log(cars, "cars") https://warm-taiga-97321.herokuapp.com/

    if (isLoading || !cars) {
        return <p className='text-center mx-auto h-[80vh]'><progress className="progress w-1/4 mt-20"></progress></p>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (data) {
        // console.log("data")
    }

    return (

        <div className='my-10'>
            <p className="text-center text-4xl font-serif my-6">Our All Inventory</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mx-auto inventory_head gap-y-5'>
                {
                    cars?.map(car => <SingleAllInventory
                        car={car}
                        cars={cars}
                        setCars={setCars}
                        key={car?._id}
                        isLoading={isLoading}
                        isError={isError}
                        error={error}
                    >
                    </SingleAllInventory>)
                }
            </div>
        </div>
    )
}

export default AllInventory