import React from 'react'
// import Footer from '../Footer/Footer'
import Inventory from '../Inventory/Inventory'
import Reviews from '../Reviews/Reviews'
import Banner from './Banner'

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Reviews />
            {/* <Footer /> */}
        </div>
    )
}

export default Home