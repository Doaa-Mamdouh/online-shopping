import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="header-bottom section">
            <div className="container">
                <div className="row">

                    {/* Header Bottom Wrapper Start  */}
                    <div className="header-bottom-wrapper text-center col">

                        {/* <!-- Header Bottom Logo --> */}
                        <div className="header-bottom-logo">
                            <a href="index.html" className="logo"><img src="img/logo.png" alt="logo" /></a>
                        </div>

                        {/* <!-- Main Menu --> */}
                        <Router>
                            <nav id="main-menu" className="main-menu">
                                <ul>
                                    <li className="active"><Link to={"/"}>home</Link></li>
                                    <li><a href="shop.html">shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">shop page</a></li>
                                            <li><a href="product-details.html">product details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">about</a></li>
                                    <li><a href="#">pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="under-construction.html">Under Construction</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">blog page</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                        </Router>
                        {/* <!-- Header Search --> */}
                        <div className="header-search">

                            {/* <!-- Search Toggle --> */}
                            <button className="search-toggle"><i className="ion-ios-search-strong"></i></button>

                            {/* <!-- Search Form --> */}
                            <div className="header-search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="ion-ios-search-strong"></i></button>
                                </form>
                            </div>

                        </div>

                        {/* <!-- Mobile Menu --> */}
                        <div className="mobile-menu section d-md-none"></div>

                        {/* </div><!-- Header Bottom Wrapper End --> */}

                    </div>
                </div>
            </div>
        </div>
    )
}