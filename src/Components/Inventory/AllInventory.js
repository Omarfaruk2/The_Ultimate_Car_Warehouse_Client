import React from 'react'
import "./Inventory.css"
import { useQuery } from 'react-query'
import fetchPosts from './FetchApi'
import SingleAllInventory from './SingleAllInventory'
const AllInventory = () => {

    const { data, error, isError, isLoading } = useQuery('users', fetchPosts)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (data) {
        // console.log("data")
    }
    // console.log(data, "data")

    return (

        <div className='my-10'>
            <div className='grid grid-cols-3 mx-auto gap-y-5'>
                {
                    data?.map(car => <SingleAllInventory
                        car={car}
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