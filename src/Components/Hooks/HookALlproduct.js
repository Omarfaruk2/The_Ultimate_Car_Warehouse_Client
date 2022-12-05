import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const HookALlproduct = () => {

    const [user, loading] = useAuthState(auth)
    const [product, setProduct] = useState([])



    useEffect(() => {
        const url = "https://no-problem.onrender.com/inventory"
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])


    if (loading) {
        return <p>loading........</p>
    }


    return [product, setProduct]
}

export default HookALlproduct