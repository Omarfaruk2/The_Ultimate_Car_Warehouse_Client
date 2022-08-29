import React from 'react'
// import Footer from '../Footer/Footer'
import Inventory from '../Inventory/Inventory'
import Reviews from '../Reviews/Reviews'
import Banner from './Banner'
import Inspacetion from './Inspacetion'

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Inventory />
            <Inspacetion />
            <Reviews />
            {/* <Footer /> */}
        </div>
    )
}

export default Home