import React from 'react'

const SingleMyitems = ({ item }) => {

    // console.log(item, "item")

    const { name, image, description, price, quantity, supplierName } = item


    return (
        <div>

            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <th>1</th>
                    <td>{name}</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
            </tbody>


        </div>
    )
}

export default SingleMyitems

