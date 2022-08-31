import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'


const UseallProducts = () => {

    const [user, loading] = useAuthState(auth)

    const [product, setProduct] = useState([])



    useEffect(() => {
        const url = "http://localhost:5000/myitems"
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [user?.email])


    if (loading) {
        return <p>loading........</p>
    }


    return [product, setProduct]
}

export default UseallProducts