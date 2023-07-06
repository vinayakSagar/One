import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import image1 from '../assets/3.jpg'
import image2 from '../assets/4.jpg'

const Services = () => {
    return (
        <div className='servies'>
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={10000} showThumbs={false}>
                <div>
                    <img src={image1} alt="ITEM1" />
                    <p className='legend'>Full Stack</p>
                </div>

                <div>
                    <img src={image2} alt="ITEM2" />
                    <p className='legend'>Peer-to-peer Support</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services
