import React from 'react';
import img1 from '../../assets/img/hero/1.jpg';
import img2 from '../../assets/img/hero/2.jpg';

export default function Carousel() {
    return (
        <div className="hero-slider section fix">

        {/* <!-- Hero Slide Item Start--> */}
        <div className="hero-item" style={{ backgroundImage: `url(${img1})` }}>

            {/* <!-- Hero Content Start--> */}
            <div className="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>
            {/* <!-- Hero Content End--> */}


        </div>
        {/* <!-- Hero Slide Item End--> */}

        {/* <!-- Hero Slide Item Start--> */}
        <div className="hero-item" style={{ backgroundImage: `url(${img2})` }}>

            {/* <!-- Hero Content Start--> */}
            <div className="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>
            {/* <!-- Hero Content End--> */} 


        </div>
        {/* <!-- Hero Slide Item End--> */}

    </div>
    // <!-- Hero Slider End-->
    )
}