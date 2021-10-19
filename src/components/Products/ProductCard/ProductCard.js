import React from 'react';
//import { Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Cart from '../../Cart/Cart';

export default function ProductCard(props) {
    if (!props.data) return "no data";
    return (
        <div key={props.key} className="product">
            <Router>
                <div className="image">
                    <Link to={`/${props.data.id}`} className="img productImg"><img src={props.data.image} alt="logo" /></Link>
                    <Link to={`/${props.data.id}`} className="wishlist"><i className="fa fa-heart-o"></i></Link>

                    {/* <i className="label fa fa-shopping-cart"></i><span className="num">{props.cartNum}</span> */}
                </div>


                <div className="content">
                    <div className="head fix">
                        <div className="title-category float-left">
                            <h5 className="title productTitle"><Link to={`/${props.data.id}`}>{props.data.title}</Link></h5>
                            <a href="shop.html" className="category">{props.data.category}</a>
                        </div>
                        <div className="price float-right">
                            <span className="new">{props.data.price} $</span>
                        </div>
                    </div>

                    { /* <!-- Action Button -->  */}
                    <div className="action-button fix">
                        <Link to="#" onClick={() => { props.addToCart(props.data.id) }}>add to cart</Link>
                    </div>
                </div>
            </Router>
        </div>
    )
}