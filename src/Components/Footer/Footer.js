import React from 'react'
import "./Footer.css"
import { Icon } from '@iconify/react'


const Footer = () => {
    return (
        <div className=' bg-slate-800'>
            <footer className="footer text-center p-10 grid lg:grid-cols-4 sm:grid-cols-2 mt-12  text-white">
                <div className=''>
                    <span className="text-3xl">Ultimate Warehouse</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">
                        Follow Us
                    </span>
                    <a className="link link-hover">
                        <Icon className='text-4xl' icon="ci:facebook" />
                    </a>
                    <a className="link link-hover">
                        <Icon className='text-4xl' icon="akar-icons:twitter-fill" />
                    </a>
                    <a className="link link-hover">
                        <Icon className='text-4xl' icon="akar-icons:google-contained-fill" />
                    </a>
                </div>
            </footer>
            <p className='text-center text-white text-xl py-10'>© and ™ TrueCar, Inc. All rights reserved. Vehicle photos © Evox Images © 1986-2022 Chrome Data Solutions, LP</p>
        </div>
    )
}

export default Footer