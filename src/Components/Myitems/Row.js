import React from 'react'

const Row = ({ order, index, setProduct, handledelete }) => {


    const { _id, name, image, description, price, quantity, supplierName } = order


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td>
                <img width="70px" src={image} alt="Add Img" />
            </td>
            <td>
                <button onClick={() => handledelete(_id)} className="btn btn-error btn-xs">Delete</button>
            </td>
        </tr>
    )
}

export default Row